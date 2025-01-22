# `googleComputeBackendService` Submodule <a name="`googleComputeBackendService` Submodule" id="@cdktf/provider-google-beta.googleComputeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendService <a name="GoogleComputeBackendService" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendService(Construct Scope, string Id, GoogleComputeBackendServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig">GoogleComputeBackendServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig">GoogleComputeBackendServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend">PutBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy">PutCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers">PutCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash">PutConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap">PutIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies">PutLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection">PutOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings">PutSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie">PutStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetAffinityCookieTtlSec">ResetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCdnPolicy">ResetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCircuitBreakers">ResetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCompressionMode">ResetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConnectionDrainingTimeoutSec">ResetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConsistentHash">ResetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomRequestHeaders">ResetCustomRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomResponseHeaders">ResetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEdgeSecurityPolicy">ResetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEnableCdn">ResetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIap">ResetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIpAddressSelectionPolicy">ResetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicies">ResetLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicy">ResetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOutlierDetection">ResetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetServiceLbPolicy">ResetServiceLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetStrongSessionAffinityCookie">ResetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend"></a>

```csharp
private void PutBackend(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putBackend.parameter.value"></a>

- *Type:* object

---

##### `PutCdnPolicy` <a name="PutCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy"></a>

```csharp
private void PutCdnPolicy(GoogleComputeBackendServiceCdnPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---

##### `PutCircuitBreakers` <a name="PutCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers"></a>

```csharp
private void PutCircuitBreakers(GoogleComputeBackendServiceCircuitBreakers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---

##### `PutConsistentHash` <a name="PutConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash"></a>

```csharp
private void PutConsistentHash(GoogleComputeBackendServiceConsistentHash Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---

##### `PutIap` <a name="PutIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap"></a>

```csharp
private void PutIap(GoogleComputeBackendServiceIap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---

##### `PutLocalityLbPolicies` <a name="PutLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies"></a>

```csharp
private void PutLocalityLbPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLocalityLbPolicies.parameter.value"></a>

- *Type:* object

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig"></a>

```csharp
private void PutLogConfig(GoogleComputeBackendServiceLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---

##### `PutOutlierDetection` <a name="PutOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection"></a>

```csharp
private void PutOutlierDetection(GoogleComputeBackendServiceOutlierDetection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---

##### `PutSecuritySettings` <a name="PutSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings"></a>

```csharp
private void PutSecuritySettings(GoogleComputeBackendServiceSecuritySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---

##### `PutStrongSessionAffinityCookie` <a name="PutStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie"></a>

```csharp
private void PutStrongSessionAffinityCookie(GoogleComputeBackendServiceStrongSessionAffinityCookie Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeBackendServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

---

##### `ResetAffinityCookieTtlSec` <a name="ResetAffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetAffinityCookieTtlSec"></a>

```csharp
private void ResetAffinityCookieTtlSec()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetCdnPolicy` <a name="ResetCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCdnPolicy"></a>

```csharp
private void ResetCdnPolicy()
```

##### `ResetCircuitBreakers` <a name="ResetCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCircuitBreakers"></a>

```csharp
private void ResetCircuitBreakers()
```

##### `ResetCompressionMode` <a name="ResetCompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCompressionMode"></a>

```csharp
private void ResetCompressionMode()
```

##### `ResetConnectionDrainingTimeoutSec` <a name="ResetConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConnectionDrainingTimeoutSec"></a>

```csharp
private void ResetConnectionDrainingTimeoutSec()
```

##### `ResetConsistentHash` <a name="ResetConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetConsistentHash"></a>

```csharp
private void ResetConsistentHash()
```

##### `ResetCustomRequestHeaders` <a name="ResetCustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomRequestHeaders"></a>

```csharp
private void ResetCustomRequestHeaders()
```

##### `ResetCustomResponseHeaders` <a name="ResetCustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetCustomResponseHeaders"></a>

```csharp
private void ResetCustomResponseHeaders()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEdgeSecurityPolicy` <a name="ResetEdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEdgeSecurityPolicy"></a>

```csharp
private void ResetEdgeSecurityPolicy()
```

##### `ResetEnableCdn` <a name="ResetEnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetEnableCdn"></a>

```csharp
private void ResetEnableCdn()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetHealthChecks"></a>

```csharp
private void ResetHealthChecks()
```

##### `ResetIap` <a name="ResetIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIap"></a>

```csharp
private void ResetIap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddressSelectionPolicy` <a name="ResetIpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetIpAddressSelectionPolicy"></a>

```csharp
private void ResetIpAddressSelectionPolicy()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLoadBalancingScheme"></a>

```csharp
private void ResetLoadBalancingScheme()
```

##### `ResetLocalityLbPolicies` <a name="ResetLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicies"></a>

```csharp
private void ResetLocalityLbPolicies()
```

##### `ResetLocalityLbPolicy` <a name="ResetLocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLocalityLbPolicy"></a>

```csharp
private void ResetLocalityLbPolicy()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetOutlierDetection` <a name="ResetOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetOutlierDetection"></a>

```csharp
private void ResetOutlierDetection()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSecuritySettings"></a>

```csharp
private void ResetSecuritySettings()
```

##### `ResetServiceLbPolicy` <a name="ResetServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetServiceLbPolicy"></a>

```csharp
private void ResetServiceLbPolicy()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetSessionAffinity"></a>

```csharp
private void ResetSessionAffinity()
```

##### `ResetStrongSessionAffinityCookie` <a name="ResetStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetStrongSessionAffinityCookie"></a>

```csharp
private void ResetStrongSessionAffinityCookie()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.resetTimeoutSec"></a>

```csharp
private void ResetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeBackendService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeBackendService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeBackendService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeBackendService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeBackendService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList">GoogleComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference">GoogleComputeBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference">GoogleComputeBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.generatedId">GeneratedId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference">GoogleComputeBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicies">LocalityLbPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList">GoogleComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference">GoogleComputeBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference">GoogleComputeBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettings">SecuritySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference">GoogleComputeBackendServiceSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference">GoogleComputeBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSecInput">AffinityCookieTtlSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backendInput">BackendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicyInput">CdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakersInput">CircuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionModeInput">CompressionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSecInput">ConnectionDrainingTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHashInput">ConsistentHashInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeadersInput">CustomRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeadersInput">CustomResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicyInput">EdgeSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdnInput">EnableCdnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecksInput">HealthChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iapInput">IapInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicyInput">IpAddressSelectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPoliciesInput">LocalityLbPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicyInput">LocalityLbPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetectionInput">OutlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicyInput">ServiceLbPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookieInput">StrongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionMode">CompressionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeaders">CustomRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdn">EnableCdn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecks">HealthChecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicy">ServiceLbPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backend"></a>

```csharp
public GoogleComputeBackendServiceBackendList Backend { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList">GoogleComputeBackendServiceBackendList</a>

---

##### `CdnPolicy`<sup>Required</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicy"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyOutputReference CdnPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyOutputReference</a>

---

##### `CircuitBreakers`<sup>Required</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakers"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakersOutputReference CircuitBreakers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference">GoogleComputeBackendServiceCircuitBreakersOutputReference</a>

---

##### `ConsistentHash`<sup>Required</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHash"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashOutputReference ConsistentHash { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference">GoogleComputeBackendServiceConsistentHashOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `GeneratedId`<sup>Required</sup> <a name="GeneratedId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.generatedId"></a>

```csharp
public double GeneratedId { get; }
```

- *Type:* double

---

##### `Iap`<sup>Required</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iap"></a>

```csharp
public GoogleComputeBackendServiceIapOutputReference Iap { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference">GoogleComputeBackendServiceIapOutputReference</a>

---

##### `LocalityLbPolicies`<sup>Required</sup> <a name="LocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicies"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesList LocalityLbPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList">GoogleComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfig"></a>

```csharp
public GoogleComputeBackendServiceLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference">GoogleComputeBackendServiceLogConfigOutputReference</a>

---

##### `OutlierDetection`<sup>Required</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetection"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionOutputReference OutlierDetection { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference">GoogleComputeBackendServiceOutlierDetectionOutputReference</a>

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettings"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettingsOutputReference SecuritySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference">GoogleComputeBackendServiceSecuritySettingsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `StrongSessionAffinityCookie`<sup>Required</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookie"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference StrongSessionAffinityCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeouts"></a>

```csharp
public GoogleComputeBackendServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference">GoogleComputeBackendServiceTimeoutsOutputReference</a>

---

##### `AffinityCookieTtlSecInput`<sup>Optional</sup> <a name="AffinityCookieTtlSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSecInput"></a>

```csharp
public double AffinityCookieTtlSecInput { get; }
```

- *Type:* double

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.backendInput"></a>

```csharp
public object BackendInput { get; }
```

- *Type:* object

---

##### `CdnPolicyInput`<sup>Optional</sup> <a name="CdnPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.cdnPolicyInput"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicy CdnPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---

##### `CircuitBreakersInput`<sup>Optional</sup> <a name="CircuitBreakersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.circuitBreakersInput"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakers CircuitBreakersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---

##### `CompressionModeInput`<sup>Optional</sup> <a name="CompressionModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionModeInput"></a>

```csharp
public string CompressionModeInput { get; }
```

- *Type:* string

---

##### `ConnectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSecInput"></a>

```csharp
public double ConnectionDrainingTimeoutSecInput { get; }
```

- *Type:* double

---

##### `ConsistentHashInput`<sup>Optional</sup> <a name="ConsistentHashInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.consistentHashInput"></a>

```csharp
public GoogleComputeBackendServiceConsistentHash ConsistentHashInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---

##### `CustomRequestHeadersInput`<sup>Optional</sup> <a name="CustomRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeadersInput"></a>

```csharp
public string[] CustomRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `CustomResponseHeadersInput`<sup>Optional</sup> <a name="CustomResponseHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeadersInput"></a>

```csharp
public string[] CustomResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EdgeSecurityPolicyInput`<sup>Optional</sup> <a name="EdgeSecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicyInput"></a>

```csharp
public string EdgeSecurityPolicyInput { get; }
```

- *Type:* string

---

##### `EnableCdnInput`<sup>Optional</sup> <a name="EnableCdnInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdnInput"></a>

```csharp
public object EnableCdnInput { get; }
```

- *Type:* object

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecksInput"></a>

```csharp
public string[] HealthChecksInput { get; }
```

- *Type:* string[]

---

##### `IapInput`<sup>Optional</sup> <a name="IapInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.iapInput"></a>

```csharp
public GoogleComputeBackendServiceIap IapInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressSelectionPolicyInput`<sup>Optional</sup> <a name="IpAddressSelectionPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicyInput"></a>

```csharp
public string IpAddressSelectionPolicyInput { get; }
```

- *Type:* string

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingSchemeInput"></a>

```csharp
public string LoadBalancingSchemeInput { get; }
```

- *Type:* string

---

##### `LocalityLbPoliciesInput`<sup>Optional</sup> <a name="LocalityLbPoliciesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPoliciesInput"></a>

```csharp
public object LocalityLbPoliciesInput { get; }
```

- *Type:* object

---

##### `LocalityLbPolicyInput`<sup>Optional</sup> <a name="LocalityLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicyInput"></a>

```csharp
public string LocalityLbPolicyInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.logConfigInput"></a>

```csharp
public GoogleComputeBackendServiceLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutlierDetectionInput`<sup>Optional</sup> <a name="OutlierDetectionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.outlierDetectionInput"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetection OutlierDetectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securitySettingsInput"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettings SecuritySettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---

##### `ServiceLbPolicyInput`<sup>Optional</sup> <a name="ServiceLbPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicyInput"></a>

```csharp
public string ServiceLbPolicyInput { get; }
```

- *Type:* string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinityInput"></a>

```csharp
public string SessionAffinityInput { get; }
```

- *Type:* string

---

##### `StrongSessionAffinityCookieInput`<sup>Optional</sup> <a name="StrongSessionAffinityCookieInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.strongSessionAffinityCookieInput"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookie StrongSessionAffinityCookieInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSecInput"></a>

```csharp
public double TimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AffinityCookieTtlSec`<sup>Required</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.affinityCookieTtlSec"></a>

```csharp
public double AffinityCookieTtlSec { get; }
```

- *Type:* double

---

##### `CompressionMode`<sup>Required</sup> <a name="CompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.compressionMode"></a>

```csharp
public string CompressionMode { get; }
```

- *Type:* string

---

##### `ConnectionDrainingTimeoutSec`<sup>Required</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```csharp
public double ConnectionDrainingTimeoutSec { get; }
```

- *Type:* double

---

##### `CustomRequestHeaders`<sup>Required</sup> <a name="CustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customRequestHeaders"></a>

```csharp
public string[] CustomRequestHeaders { get; }
```

- *Type:* string[]

---

##### `CustomResponseHeaders`<sup>Required</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.customResponseHeaders"></a>

```csharp
public string[] CustomResponseHeaders { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EdgeSecurityPolicy`<sup>Required</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.edgeSecurityPolicy"></a>

```csharp
public string EdgeSecurityPolicy { get; }
```

- *Type:* string

---

##### `EnableCdn`<sup>Required</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.enableCdn"></a>

```csharp
public object EnableCdn { get; }
```

- *Type:* object

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.healthChecks"></a>

```csharp
public string[] HealthChecks { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressSelectionPolicy`<sup>Required</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.ipAddressSelectionPolicy"></a>

```csharp
public string IpAddressSelectionPolicy { get; }
```

- *Type:* string

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; }
```

- *Type:* string

---

##### `LocalityLbPolicy`<sup>Required</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.localityLbPolicy"></a>

```csharp
public string LocalityLbPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `ServiceLbPolicy`<sup>Required</sup> <a name="ServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.serviceLbPolicy"></a>

```csharp
public string ServiceLbPolicy { get; }
```

- *Type:* string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendServiceBackend <a name="GoogleComputeBackendServiceBackend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceBackend {
    string Group,
    string BalancingMode = null,
    double CapacityScaler = null,
    string Description = null,
    double MaxConnections = null,
    double MaxConnectionsPerEndpoint = null,
    double MaxConnectionsPerInstance = null,
    double MaxRate = null,
    double MaxRatePerEndpoint = null,
    double MaxRatePerInstance = null,
    double MaxUtilization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.group">Group</a></code> | <code>string</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.balancingMode">BalancingMode</a></code> | <code>string</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.capacityScaler">CapacityScaler</a></code> | <code>double</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnections">MaxConnections</a></code> | <code>double</code> | The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>double</code> | The max number of simultaneous connections that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>double</code> | The max number of simultaneous connections that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRate">MaxRate</a></code> | <code>double</code> | The max requests per second (RPS) of the group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>double</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>double</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxUtilization">MaxUtilization</a></code> | <code>double</code> | Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0]. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#group GoogleComputeBackendService#group}

---

##### `BalancingMode`<sup>Optional</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.balancingMode"></a>

```csharp
public string BalancingMode { get; set; }
```

- *Type:* string

Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#balancing_mode GoogleComputeBackendService#balancing_mode}

---

##### `CapacityScaler`<sup>Optional</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.capacityScaler"></a>

```csharp
public double CapacityScaler { get; set; }
```

- *Type:* double

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#capacity_scaler GoogleComputeBackendService#capacity_scaler}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}

---

##### `MaxConnectionsPerEndpoint`<sup>Optional</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```csharp
public double MaxConnectionsPerEndpoint { get; set; }
```

- *Type:* double

The max number of simultaneous connections that a single backend network endpoint can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_connections_per_endpoint GoogleComputeBackendService#max_connections_per_endpoint}

---

##### `MaxConnectionsPerInstance`<sup>Optional</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```csharp
public double MaxConnectionsPerInstance { get; set; }
```

- *Type:* double

The max number of simultaneous connections that a single backend instance can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_connections_per_instance GoogleComputeBackendService#max_connections_per_instance}

---

##### `MaxRate`<sup>Optional</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRate"></a>

```csharp
public double MaxRate { get; set; }
```

- *Type:* double

The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_rate GoogleComputeBackendService#max_rate}

---

##### `MaxRatePerEndpoint`<sup>Optional</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerEndpoint"></a>

```csharp
public double MaxRatePerEndpoint { get; set; }
```

- *Type:* double

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_rate_per_endpoint GoogleComputeBackendService#max_rate_per_endpoint}

---

##### `MaxRatePerInstance`<sup>Optional</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxRatePerInstance"></a>

```csharp
public double MaxRatePerInstance { get; set; }
```

- *Type:* double

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_rate_per_instance GoogleComputeBackendService#max_rate_per_instance}

---

##### `MaxUtilization`<sup>Optional</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackend.property.maxUtilization"></a>

```csharp
public double MaxUtilization { get; set; }
```

- *Type:* double

Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_utilization GoogleComputeBackendService#max_utilization}

---

### GoogleComputeBackendServiceCdnPolicy <a name="GoogleComputeBackendServiceCdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicy {
    object BypassCacheOnRequestHeaders = null,
    GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy CacheKeyPolicy = null,
    string CacheMode = null,
    double ClientTtl = null,
    double DefaultTtl = null,
    double MaxTtl = null,
    object NegativeCaching = null,
    object NegativeCachingPolicy = null,
    double ServeWhileStale = null,
    double SignedUrlCacheMaxAgeSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code>object</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheMode">CacheMode</a></code> | <code>string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.clientTtl">ClientTtl</a></code> | <code>double</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCaching">NegativeCaching</a></code> | <code>object</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code>object</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.serveWhileStale">ServeWhileStale</a></code> | <code>double</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>double</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `BypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```csharp
public object BypassCacheOnRequestHeaders { get; set; }
```

- *Type:* object

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#bypass_cache_on_request_headers GoogleComputeBackendService#bypass_cache_on_request_headers}

---

##### `CacheKeyPolicy`<sup>Optional</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy CacheKeyPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#cache_key_policy GoogleComputeBackendService#cache_key_policy}

---

##### `CacheMode`<sup>Optional</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.cacheMode"></a>

```csharp
public string CacheMode { get; set; }
```

- *Type:* string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#cache_mode GoogleComputeBackendService#cache_mode}

---

##### `ClientTtl`<sup>Optional</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.clientTtl"></a>

```csharp
public double ClientTtl { get; set; }
```

- *Type:* double

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#client_ttl GoogleComputeBackendService#client_ttl}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#default_ttl GoogleComputeBackendService#default_ttl}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_ttl GoogleComputeBackendService#max_ttl}

---

##### `NegativeCaching`<sup>Optional</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCaching"></a>

```csharp
public object NegativeCaching { get; set; }
```

- *Type:* object

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#negative_caching GoogleComputeBackendService#negative_caching}

---

##### `NegativeCachingPolicy`<sup>Optional</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```csharp
public object NegativeCachingPolicy { get; set; }
```

- *Type:* object

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#negative_caching_policy GoogleComputeBackendService#negative_caching_policy}

---

##### `ServeWhileStale`<sup>Optional</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.serveWhileStale"></a>

```csharp
public double ServeWhileStale { get; set; }
```

- *Type:* double

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#serve_while_stale GoogleComputeBackendService#serve_while_stale}

---

##### `SignedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```csharp
public double SignedUrlCacheMaxAgeSec { get; set; }
```

- *Type:* double

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#signed_url_cache_max_age_sec GoogleComputeBackendService#signed_url_cache_max_age_sec}

---

### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders {
    string HeaderName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName">HeaderName</a></code> | <code>string</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#header_name GoogleComputeBackendService#header_name}

---

### GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy {
    object IncludeHost = null,
    string[] IncludeHttpHeaders = null,
    string[] IncludeNamedCookies = null,
    object IncludeProtocol = null,
    object IncludeQueryString = null,
    string[] QueryStringBlacklist = null,
    string[] QueryStringWhitelist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">IncludeHost</a></code> | <code>object</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>string[]</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>string[]</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">IncludeProtocol</a></code> | <code>object</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">IncludeQueryString</a></code> | <code>object</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>string[]</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>string[]</code> | Names of query string parameters to include in cache keys. |

---

##### `IncludeHost`<sup>Optional</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```csharp
public object IncludeHost { get; set; }
```

- *Type:* object

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#include_host GoogleComputeBackendService#include_host}

---

##### `IncludeHttpHeaders`<sup>Optional</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```csharp
public string[] IncludeHttpHeaders { get; set; }
```

- *Type:* string[]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#include_http_headers GoogleComputeBackendService#include_http_headers}

---

##### `IncludeNamedCookies`<sup>Optional</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```csharp
public string[] IncludeNamedCookies { get; set; }
```

- *Type:* string[]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#include_named_cookies GoogleComputeBackendService#include_named_cookies}

---

##### `IncludeProtocol`<sup>Optional</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```csharp
public object IncludeProtocol { get; set; }
```

- *Type:* object

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#include_protocol GoogleComputeBackendService#include_protocol}

---

##### `IncludeQueryString`<sup>Optional</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```csharp
public object IncludeQueryString { get; set; }
```

- *Type:* object

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#include_query_string GoogleComputeBackendService#include_query_string}

---

##### `QueryStringBlacklist`<sup>Optional</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```csharp
public string[] QueryStringBlacklist { get; set; }
```

- *Type:* string[]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#query_string_blacklist GoogleComputeBackendService#query_string_blacklist}

---

##### `QueryStringWhitelist`<sup>Optional</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```csharp
public string[] QueryStringWhitelist { get; set; }
```

- *Type:* string[]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#query_string_whitelist GoogleComputeBackendService#query_string_whitelist}

---

### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy {
    double Code = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code">Code</a></code> | <code>double</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">Ttl</a></code> | <code>double</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#code GoogleComputeBackendService#code}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceCircuitBreakers <a name="GoogleComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCircuitBreakers {
    GoogleComputeBackendServiceCircuitBreakersConnectTimeout ConnectTimeout = null,
    double MaxConnections = null,
    double MaxPendingRequests = null,
    double MaxRequests = null,
    double MaxRequestsPerConnection = null,
    double MaxRetries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | connect_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxConnections">MaxConnections</a></code> | <code>double</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequests">MaxRequests</a></code> | <code>double</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>double</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.connectTimeout"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakersConnectTimeout ConnectTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

connect_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#connect_timeout GoogleComputeBackendService#connect_timeout}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_connections GoogleComputeBackendService#max_connections}

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; set; }
```

- *Type:* double

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_pending_requests GoogleComputeBackendService#max_pending_requests}

---

##### `MaxRequests`<sup>Optional</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequests"></a>

```csharp
public double MaxRequests { get; set; }
```

- *Type:* double

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_requests GoogleComputeBackendService#max_requests}

---

##### `MaxRequestsPerConnection`<sup>Optional</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```csharp
public double MaxRequestsPerConnection { get; set; }
```

- *Type:* double

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_requests_per_connection GoogleComputeBackendService#max_requests_per_connection}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_retries GoogleComputeBackendService#max_retries}

---

### GoogleComputeBackendServiceCircuitBreakersConnectTimeout <a name="GoogleComputeBackendServiceCircuitBreakersConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCircuitBreakersConnectTimeout {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceConfig <a name="GoogleComputeBackendServiceConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double AffinityCookieTtlSec = null,
    object Backend = null,
    GoogleComputeBackendServiceCdnPolicy CdnPolicy = null,
    GoogleComputeBackendServiceCircuitBreakers CircuitBreakers = null,
    string CompressionMode = null,
    double ConnectionDrainingTimeoutSec = null,
    GoogleComputeBackendServiceConsistentHash ConsistentHash = null,
    string[] CustomRequestHeaders = null,
    string[] CustomResponseHeaders = null,
    string Description = null,
    string EdgeSecurityPolicy = null,
    object EnableCdn = null,
    string[] HealthChecks = null,
    GoogleComputeBackendServiceIap Iap = null,
    string Id = null,
    string IpAddressSelectionPolicy = null,
    string LoadBalancingScheme = null,
    object LocalityLbPolicies = null,
    string LocalityLbPolicy = null,
    GoogleComputeBackendServiceLogConfig LogConfig = null,
    GoogleComputeBackendServiceOutlierDetection OutlierDetection = null,
    string PortName = null,
    string Project = null,
    string Protocol = null,
    string SecurityPolicy = null,
    GoogleComputeBackendServiceSecuritySettings SecuritySettings = null,
    string ServiceLbPolicy = null,
    string SessionAffinity = null,
    GoogleComputeBackendServiceStrongSessionAffinityCookie StrongSessionAffinityCookie = null,
    GoogleComputeBackendServiceTimeouts Timeouts = null,
    double TimeoutSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.affinityCookieTtlSec">AffinityCookieTtlSec</a></code> | <code>double</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.backend">Backend</a></code> | <code>object</code> | backend block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.cdnPolicy">CdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.circuitBreakers">CircuitBreakers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.compressionMode">CompressionMode</a></code> | <code>string</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connectionDrainingTimeoutSec">ConnectionDrainingTimeoutSec</a></code> | <code>double</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.consistentHash">ConsistentHash</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customRequestHeaders">CustomRequestHeaders</a></code> | <code>string[]</code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customResponseHeaders">CustomResponseHeaders</a></code> | <code>string[]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.edgeSecurityPolicy">EdgeSecurityPolicy</a></code> | <code>string</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.enableCdn">EnableCdn</a></code> | <code>object</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.healthChecks">HealthChecks</a></code> | <code>string[]</code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.iap">Iap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.ipAddressSelectionPolicy">IpAddressSelectionPolicy</a></code> | <code>string</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicies">LocalityLbPolicies</a></code> | <code>object</code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicy">LocalityLbPolicy</a></code> | <code>string</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.outlierDetection">OutlierDetection</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.portName">PortName</a></code> | <code>string</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.protocol">Protocol</a></code> | <code>string</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securitySettings">SecuritySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.serviceLbPolicy">ServiceLbPolicy</a></code> | <code>string</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.strongSessionAffinityCookie">StrongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `AffinityCookieTtlSec`<sup>Optional</sup> <a name="AffinityCookieTtlSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.affinityCookieTtlSec"></a>

```csharp
public double AffinityCookieTtlSec { get; set; }
```

- *Type:* double

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#affinity_cookie_ttl_sec GoogleComputeBackendService#affinity_cookie_ttl_sec}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.backend"></a>

```csharp
public object Backend { get; set; }
```

- *Type:* object

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#backend GoogleComputeBackendService#backend}

---

##### `CdnPolicy`<sup>Optional</sup> <a name="CdnPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.cdnPolicy"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicy CdnPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#cdn_policy GoogleComputeBackendService#cdn_policy}

---

##### `CircuitBreakers`<sup>Optional</sup> <a name="CircuitBreakers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.circuitBreakers"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakers CircuitBreakers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#circuit_breakers GoogleComputeBackendService#circuit_breakers}

---

##### `CompressionMode`<sup>Optional</sup> <a name="CompressionMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.compressionMode"></a>

```csharp
public string CompressionMode { get; set; }
```

- *Type:* string

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#compression_mode GoogleComputeBackendService#compression_mode}

---

##### `ConnectionDrainingTimeoutSec`<sup>Optional</sup> <a name="ConnectionDrainingTimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```csharp
public double ConnectionDrainingTimeoutSec { get; set; }
```

- *Type:* double

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#connection_draining_timeout_sec GoogleComputeBackendService#connection_draining_timeout_sec}

---

##### `ConsistentHash`<sup>Optional</sup> <a name="ConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.consistentHash"></a>

```csharp
public GoogleComputeBackendServiceConsistentHash ConsistentHash { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#consistent_hash GoogleComputeBackendService#consistent_hash}

---

##### `CustomRequestHeaders`<sup>Optional</sup> <a name="CustomRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customRequestHeaders"></a>

```csharp
public string[] CustomRequestHeaders { get; set; }
```

- *Type:* string[]

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#custom_request_headers GoogleComputeBackendService#custom_request_headers}

---

##### `CustomResponseHeaders`<sup>Optional</sup> <a name="CustomResponseHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.customResponseHeaders"></a>

```csharp
public string[] CustomResponseHeaders { get; set; }
```

- *Type:* string[]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#custom_response_headers GoogleComputeBackendService#custom_response_headers}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#description GoogleComputeBackendService#description}

---

##### `EdgeSecurityPolicy`<sup>Optional</sup> <a name="EdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.edgeSecurityPolicy"></a>

```csharp
public string EdgeSecurityPolicy { get; set; }
```

- *Type:* string

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#edge_security_policy GoogleComputeBackendService#edge_security_policy}

---

##### `EnableCdn`<sup>Optional</sup> <a name="EnableCdn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.enableCdn"></a>

```csharp
public object EnableCdn { get; set; }
```

- *Type:* object

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#enable_cdn GoogleComputeBackendService#enable_cdn}

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.healthChecks"></a>

```csharp
public string[] HealthChecks { get; set; }
```

- *Type:* string[]

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#health_checks GoogleComputeBackendService#health_checks}

---

##### `Iap`<sup>Optional</sup> <a name="Iap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.iap"></a>

```csharp
public GoogleComputeBackendServiceIap Iap { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#iap GoogleComputeBackendService#iap}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#id GoogleComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressSelectionPolicy`<sup>Optional</sup> <a name="IpAddressSelectionPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```csharp
public string IpAddressSelectionPolicy { get; set; }
```

- *Type:* string

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#ip_address_selection_policy GoogleComputeBackendService#ip_address_selection_policy}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; set; }
```

- *Type:* string

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#load_balancing_scheme GoogleComputeBackendService#load_balancing_scheme}

---

##### `LocalityLbPolicies`<sup>Optional</sup> <a name="LocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicies"></a>

```csharp
public object LocalityLbPolicies { get; set; }
```

- *Type:* object

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#locality_lb_policies GoogleComputeBackendService#locality_lb_policies}

---

##### `LocalityLbPolicy`<sup>Optional</sup> <a name="LocalityLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.localityLbPolicy"></a>

```csharp
public string LocalityLbPolicy { get; set; }
```

- *Type:* string

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824
* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  reported weights. Only applicable to loadBalancingScheme
  EXTERNAL. If set, the Backend Service must
  configure a non legacy HTTP-based Health Check, and
  health check replies are expected to contain
  non-standard HTTP response header field
  X-Load-Balancing-Endpoint-Weight to specify the
  per-instance weights. If set, Load Balancing is weight
  based on the per-instance weights reported in the last
  processed health check replies, as long as every
  instance either reported a valid weight or had
  UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  equal-weight.

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#locality_lb_policy GoogleComputeBackendService#locality_lb_policy}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.logConfig"></a>

```csharp
public GoogleComputeBackendServiceLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#log_config GoogleComputeBackendService#log_config}

---

##### `OutlierDetection`<sup>Optional</sup> <a name="OutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.outlierDetection"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetection OutlierDetection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#outlier_detection GoogleComputeBackendService#outlier_detection}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#port_name GoogleComputeBackendService#port_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#project GoogleComputeBackendService#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#protocol GoogleComputeBackendService#protocol}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#security_policy GoogleComputeBackendService#security_policy}

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.securitySettings"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettings SecuritySettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#security_settings GoogleComputeBackendService#security_settings}

---

##### `ServiceLbPolicy`<sup>Optional</sup> <a name="ServiceLbPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.serviceLbPolicy"></a>

```csharp
public string ServiceLbPolicy { get; set; }
```

- *Type:* string

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#service_lb_policy GoogleComputeBackendService#service_lb_policy}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; set; }
```

- *Type:* string

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#session_affinity GoogleComputeBackendService#session_affinity}

---

##### `StrongSessionAffinityCookie`<sup>Optional</sup> <a name="StrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookie StrongSessionAffinityCookie { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#strong_session_affinity_cookie GoogleComputeBackendService#strong_session_affinity_cookie}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeouts"></a>

```csharp
public GoogleComputeBackendServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts">GoogleComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#timeouts GoogleComputeBackendService#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConfig.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; set; }
```

- *Type:* double

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#timeout_sec GoogleComputeBackendService#timeout_sec}

---

### GoogleComputeBackendServiceConsistentHash <a name="GoogleComputeBackendServiceConsistentHash" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConsistentHash {
    GoogleComputeBackendServiceConsistentHashHttpCookie HttpCookie = null,
    string HttpHeaderName = null,
    double MinimumRingSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.minimumRingSize">MinimumRingSize</a></code> | <code>double</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `HttpCookie`<sup>Optional</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpCookie"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookie HttpCookie { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#http_cookie GoogleComputeBackendService#http_cookie}

---

##### `HttpHeaderName`<sup>Optional</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; set; }
```

- *Type:* string

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#http_header_name GoogleComputeBackendService#http_header_name}

---

##### `MinimumRingSize`<sup>Optional</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash.property.minimumRingSize"></a>

```csharp
public double MinimumRingSize { get; set; }
```

- *Type:* double

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#minimum_ring_size GoogleComputeBackendService#minimum_ring_size}

---

### GoogleComputeBackendServiceConsistentHashHttpCookie <a name="GoogleComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConsistentHashHttpCookie {
    string Name = null,
    string Path = null,
    GoogleComputeBackendServiceConsistentHashHttpCookieTtl Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.name">Name</a></code> | <code>string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.path">Path</a></code> | <code>string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#path GoogleComputeBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookieTtl Ttl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceConsistentHashHttpCookieTtl <a name="GoogleComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConsistentHashHttpCookieTtl {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceIap <a name="GoogleComputeBackendServiceIap" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceIap {
    object Enabled,
    string Oauth2ClientId = null,
    string Oauth2ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.enabled">Enabled</a></code> | <code>object</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>string</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>string</code> | OAuth2 Client Secret for IAP. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#enabled GoogleComputeBackendService#enabled}

---

##### `Oauth2ClientId`<sup>Optional</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientId"></a>

```csharp
public string Oauth2ClientId { get; set; }
```

- *Type:* string

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#oauth2_client_id GoogleComputeBackendService#oauth2_client_id}

---

##### `Oauth2ClientSecret`<sup>Optional</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap.property.oauth2ClientSecret"></a>

```csharp
public string Oauth2ClientSecret { get; set; }
```

- *Type:* string

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#oauth2_client_secret GoogleComputeBackendService#oauth2_client_secret}

---

### GoogleComputeBackendServiceLocalityLbPolicies <a name="GoogleComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPolicies {
    GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy CustomPolicy = null,
    GoogleComputeBackendServiceLocalityLbPoliciesPolicy Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | policy block. |

---

##### `CustomPolicy`<sup>Optional</sup> <a name="CustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.customPolicy"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy CustomPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#custom_policy GoogleComputeBackendService#custom_policy}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPolicies.property.policy"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesPolicy Policy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#policy GoogleComputeBackendService#policy}

---

### GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy {
    string Name,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name">Name</a></code> | <code>string</code> | Identifies the custom policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data">Data</a></code> | <code>string</code> | An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#data GoogleComputeBackendService#data}

---

### GoogleComputeBackendServiceLocalityLbPoliciesPolicy <a name="GoogleComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPoliciesPolicy {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.property.name">Name</a></code> | <code>string</code> | The name of a locality load balancer policy to be used. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of a locality load balancer policy to be used.

The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.

This field should only be populated when the customPolicy field is not
used.

Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.

The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

### GoogleComputeBackendServiceLogConfig <a name="GoogleComputeBackendServiceLogConfig" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLogConfig {
    object Enable = null,
    double SampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.enable">Enable</a></code> | <code>object</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.sampleRate">SampleRate</a></code> | <code>double</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#enable GoogleComputeBackendService#enable}

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig.property.sampleRate"></a>

```csharp
public double SampleRate { get; set; }
```

- *Type:* double

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#sample_rate GoogleComputeBackendService#sample_rate}

---

### GoogleComputeBackendServiceOutlierDetection <a name="GoogleComputeBackendServiceOutlierDetection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceOutlierDetection {
    GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime BaseEjectionTime = null,
    double ConsecutiveErrors = null,
    double ConsecutiveGatewayFailure = null,
    double EnforcingConsecutiveErrors = null,
    double EnforcingConsecutiveGatewayFailure = null,
    double EnforcingSuccessRate = null,
    GoogleComputeBackendServiceOutlierDetectionInterval Interval = null,
    double MaxEjectionPercent = null,
    double SuccessRateMinimumHosts = null,
    double SuccessRateRequestVolume = null,
    double SuccessRateStdevFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>double</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>double</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>double</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>double</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>double</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>double</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>double</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>double</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `BaseEjectionTime`<sup>Optional</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime BaseEjectionTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#base_ejection_time GoogleComputeBackendService#base_ejection_time}

---

##### `ConsecutiveErrors`<sup>Optional</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```csharp
public double ConsecutiveErrors { get; set; }
```

- *Type:* double

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#consecutive_errors GoogleComputeBackendService#consecutive_errors}

---

##### `ConsecutiveGatewayFailure`<sup>Optional</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```csharp
public double ConsecutiveGatewayFailure { get; set; }
```

- *Type:* double

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#consecutive_gateway_failure GoogleComputeBackendService#consecutive_gateway_failure}

---

##### `EnforcingConsecutiveErrors`<sup>Optional</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```csharp
public double EnforcingConsecutiveErrors { get; set; }
```

- *Type:* double

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#enforcing_consecutive_errors GoogleComputeBackendService#enforcing_consecutive_errors}

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```csharp
public double EnforcingConsecutiveGatewayFailure { get; set; }
```

- *Type:* double

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#enforcing_consecutive_gateway_failure GoogleComputeBackendService#enforcing_consecutive_gateway_failure}

---

##### `EnforcingSuccessRate`<sup>Optional</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```csharp
public double EnforcingSuccessRate { get; set; }
```

- *Type:* double

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#enforcing_success_rate GoogleComputeBackendService#enforcing_success_rate}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.interval"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionInterval Interval { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#interval GoogleComputeBackendService#interval}

---

##### `MaxEjectionPercent`<sup>Optional</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; set; }
```

- *Type:* double

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#max_ejection_percent GoogleComputeBackendService#max_ejection_percent}

---

##### `SuccessRateMinimumHosts`<sup>Optional</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```csharp
public double SuccessRateMinimumHosts { get; set; }
```

- *Type:* double

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#success_rate_minimum_hosts GoogleComputeBackendService#success_rate_minimum_hosts}

---

##### `SuccessRateRequestVolume`<sup>Optional</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```csharp
public double SuccessRateRequestVolume { get; set; }
```

- *Type:* double

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#success_rate_request_volume GoogleComputeBackendService#success_rate_request_volume}

---

##### `SuccessRateStdevFactor`<sup>Optional</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```csharp
public double SuccessRateStdevFactor { get; set; }
```

- *Type:* double

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#success_rate_stdev_factor GoogleComputeBackendService#success_rate_stdev_factor}

---

### GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceOutlierDetectionInterval <a name="GoogleComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceOutlierDetectionInterval {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceSecuritySettings <a name="GoogleComputeBackendServiceSecuritySettings" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceSecuritySettings {
    GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication AwsV4Authentication = null,
    string ClientTlsPolicy = null,
    string[] SubjectAltNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>string</code> | ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.subjectAltNames">SubjectAltNames</a></code> | <code>string[]</code> | A list of alternate names to verify the subject identity in the certificate. |

---

##### `AwsV4Authentication`<sup>Optional</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.awsV4Authentication"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication AwsV4Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#aws_v4_authentication GoogleComputeBackendService#aws_v4_authentication}

---

##### `ClientTlsPolicy`<sup>Optional</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.clientTlsPolicy"></a>

```csharp
public string ClientTlsPolicy { get; set; }
```

- *Type:* string

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#client_tls_policy GoogleComputeBackendService#client_tls_policy}

---

##### `SubjectAltNames`<sup>Optional</sup> <a name="SubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings.property.subjectAltNames"></a>

```csharp
public string[] SubjectAltNames { get; set; }
```

- *Type:* string[]

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#subject_alt_names GoogleComputeBackendService#subject_alt_names}

---

### GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication <a name="GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication {
    string AccessKey = null,
    string AccessKeyId = null,
    string AccessKeyVersion = null,
    string OriginRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey">AccessKey</a></code> | <code>string</code> | The access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | The identifier of an access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion">AccessKeyVersion</a></code> | <code>string</code> | The optional version identifier for the access key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion">OriginRegion</a></code> | <code>string</code> | The name of the cloud region of your origin. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

The access key used for s3 bucket authentication.

Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#access_key GoogleComputeBackendService#access_key}

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

The identifier of an access key used for s3 bucket authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#access_key_id GoogleComputeBackendService#access_key_id}

---

##### `AccessKeyVersion`<sup>Optional</sup> <a name="AccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion"></a>

```csharp
public string AccessKeyVersion { get; set; }
```

- *Type:* string

The optional version identifier for the access key.

You can use this to keep track of different iterations of your access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#access_key_version GoogleComputeBackendService#access_key_version}

---

##### `OriginRegion`<sup>Optional</sup> <a name="OriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion"></a>

```csharp
public string OriginRegion { get; set; }
```

- *Type:* string

The name of the cloud region of your origin.

This is a free-form field with the name of the region your cloud uses to host your origin.
For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#origin_region GoogleComputeBackendService#origin_region}

---

### GoogleComputeBackendServiceStrongSessionAffinityCookie <a name="GoogleComputeBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceStrongSessionAffinityCookie {
    string Name = null,
    string Path = null,
    GoogleComputeBackendServiceStrongSessionAffinityCookieTtl Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.name">Name</a></code> | <code>string</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.path">Path</a></code> | <code>string</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#name GoogleComputeBackendService#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#path GoogleComputeBackendService#path}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtl Ttl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#ttl GoogleComputeBackendService#ttl}

---

### GoogleComputeBackendServiceStrongSessionAffinityCookieTtl <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceStrongSessionAffinityCookieTtl {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#seconds GoogleComputeBackendService#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#nanos GoogleComputeBackendService#nanos}

---

### GoogleComputeBackendServiceTimeouts <a name="GoogleComputeBackendServiceTimeouts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#create GoogleComputeBackendService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#delete GoogleComputeBackendService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#update GoogleComputeBackendService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#create GoogleComputeBackendService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#delete GoogleComputeBackendService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_backend_service#update GoogleComputeBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendServiceBackendList <a name="GoogleComputeBackendServiceBackendList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get"></a>

```csharp
private GoogleComputeBackendServiceBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceBackendOutputReference <a name="GoogleComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetBalancingMode">ResetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetCapacityScaler">ResetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">ResetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">ResetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRate">ResetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">ResetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance">ResetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxUtilization">ResetMaxUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBalancingMode` <a name="ResetBalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetBalancingMode"></a>

```csharp
private void ResetBalancingMode()
```

##### `ResetCapacityScaler` <a name="ResetCapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```csharp
private void ResetCapacityScaler()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetMaxConnectionsPerEndpoint` <a name="ResetMaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```csharp
private void ResetMaxConnectionsPerEndpoint()
```

##### `ResetMaxConnectionsPerInstance` <a name="ResetMaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```csharp
private void ResetMaxConnectionsPerInstance()
```

##### `ResetMaxRate` <a name="ResetMaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRate"></a>

```csharp
private void ResetMaxRate()
```

##### `ResetMaxRatePerEndpoint` <a name="ResetMaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```csharp
private void ResetMaxRatePerEndpoint()
```

##### `ResetMaxRatePerInstance` <a name="ResetMaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```csharp
private void ResetMaxRatePerInstance()
```

##### `ResetMaxUtilization` <a name="ResetMaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```csharp
private void ResetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingModeInput">BalancingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScalerInput">CapacityScalerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">MaxConnectionsPerEndpointInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">MaxConnectionsPerInstanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRateInput">MaxRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">MaxRatePerEndpointInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">MaxRatePerInstanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilizationInput">MaxUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingMode">BalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScaler">CapacityScaler</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">MaxConnectionsPerEndpoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">MaxConnectionsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">MaxRatePerEndpoint</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">MaxRatePerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilization">MaxUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BalancingModeInput`<sup>Optional</sup> <a name="BalancingModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```csharp
public string BalancingModeInput { get; }
```

- *Type:* string

---

##### `CapacityScalerInput`<sup>Optional</sup> <a name="CapacityScalerInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```csharp
public double CapacityScalerInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="MaxConnectionsPerEndpointInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```csharp
public double MaxConnectionsPerEndpointInput { get; }
```

- *Type:* double

---

##### `MaxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="MaxConnectionsPerInstanceInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```csharp
public double MaxConnectionsPerInstanceInput { get; }
```

- *Type:* double

---

##### `MaxRateInput`<sup>Optional</sup> <a name="MaxRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRateInput"></a>

```csharp
public double MaxRateInput { get; }
```

- *Type:* double

---

##### `MaxRatePerEndpointInput`<sup>Optional</sup> <a name="MaxRatePerEndpointInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```csharp
public double MaxRatePerEndpointInput { get; }
```

- *Type:* double

---

##### `MaxRatePerInstanceInput`<sup>Optional</sup> <a name="MaxRatePerInstanceInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```csharp
public double MaxRatePerInstanceInput { get; }
```

- *Type:* double

---

##### `MaxUtilizationInput`<sup>Optional</sup> <a name="MaxUtilizationInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```csharp
public double MaxUtilizationInput { get; }
```

- *Type:* double

---

##### `BalancingMode`<sup>Required</sup> <a name="BalancingMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```csharp
public string BalancingMode { get; }
```

- *Type:* string

---

##### `CapacityScaler`<sup>Required</sup> <a name="CapacityScaler" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```csharp
public double CapacityScaler { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxConnectionsPerEndpoint`<sup>Required</sup> <a name="MaxConnectionsPerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```csharp
public double MaxConnectionsPerEndpoint { get; }
```

- *Type:* double

---

##### `MaxConnectionsPerInstance`<sup>Required</sup> <a name="MaxConnectionsPerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```csharp
public double MaxConnectionsPerInstance { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `MaxRatePerEndpoint`<sup>Required</sup> <a name="MaxRatePerEndpoint" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```csharp
public double MaxRatePerEndpoint { get; }
```

- *Type:* double

---

##### `MaxRatePerInstance`<sup>Required</sup> <a name="MaxRatePerInstance" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```csharp
public double MaxRatePerInstance { get; }
```

- *Type:* double

---

##### `MaxUtilization`<sup>Required</sup> <a name="MaxUtilization" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```csharp
public double MaxUtilization { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```csharp
private GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">ResetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">ResetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">ResetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">ResetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">ResetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">ResetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">ResetQueryStringWhitelist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeHost` <a name="ResetIncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```csharp
private void ResetIncludeHost()
```

##### `ResetIncludeHttpHeaders` <a name="ResetIncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```csharp
private void ResetIncludeHttpHeaders()
```

##### `ResetIncludeNamedCookies` <a name="ResetIncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```csharp
private void ResetIncludeNamedCookies()
```

##### `ResetIncludeProtocol` <a name="ResetIncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```csharp
private void ResetIncludeProtocol()
```

##### `ResetIncludeQueryString` <a name="ResetIncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```csharp
private void ResetIncludeQueryString()
```

##### `ResetQueryStringBlacklist` <a name="ResetQueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```csharp
private void ResetQueryStringBlacklist()
```

##### `ResetQueryStringWhitelist` <a name="ResetQueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```csharp
private void ResetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">IncludeHostInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">IncludeHttpHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">IncludeNamedCookiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">IncludeProtocolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">IncludeQueryStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">QueryStringBlacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">QueryStringWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">IncludeHost</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">IncludeHttpHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">IncludeNamedCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">IncludeProtocol</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">IncludeQueryString</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">QueryStringBlacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">QueryStringWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeHostInput`<sup>Optional</sup> <a name="IncludeHostInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```csharp
public object IncludeHostInput { get; }
```

- *Type:* object

---

##### `IncludeHttpHeadersInput`<sup>Optional</sup> <a name="IncludeHttpHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```csharp
public string[] IncludeHttpHeadersInput { get; }
```

- *Type:* string[]

---

##### `IncludeNamedCookiesInput`<sup>Optional</sup> <a name="IncludeNamedCookiesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```csharp
public string[] IncludeNamedCookiesInput { get; }
```

- *Type:* string[]

---

##### `IncludeProtocolInput`<sup>Optional</sup> <a name="IncludeProtocolInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```csharp
public object IncludeProtocolInput { get; }
```

- *Type:* object

---

##### `IncludeQueryStringInput`<sup>Optional</sup> <a name="IncludeQueryStringInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```csharp
public object IncludeQueryStringInput { get; }
```

- *Type:* object

---

##### `QueryStringBlacklistInput`<sup>Optional</sup> <a name="QueryStringBlacklistInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```csharp
public string[] QueryStringBlacklistInput { get; }
```

- *Type:* string[]

---

##### `QueryStringWhitelistInput`<sup>Optional</sup> <a name="QueryStringWhitelistInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```csharp
public string[] QueryStringWhitelistInput { get; }
```

- *Type:* string[]

---

##### `IncludeHost`<sup>Required</sup> <a name="IncludeHost" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```csharp
public object IncludeHost { get; }
```

- *Type:* object

---

##### `IncludeHttpHeaders`<sup>Required</sup> <a name="IncludeHttpHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```csharp
public string[] IncludeHttpHeaders { get; }
```

- *Type:* string[]

---

##### `IncludeNamedCookies`<sup>Required</sup> <a name="IncludeNamedCookies" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```csharp
public string[] IncludeNamedCookies { get; }
```

- *Type:* string[]

---

##### `IncludeProtocol`<sup>Required</sup> <a name="IncludeProtocol" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```csharp
public object IncludeProtocol { get; }
```

- *Type:* object

---

##### `IncludeQueryString`<sup>Required</sup> <a name="IncludeQueryString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```csharp
public object IncludeQueryString { get; }
```

- *Type:* object

---

##### `QueryStringBlacklist`<sup>Required</sup> <a name="QueryStringBlacklist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```csharp
public string[] QueryStringBlacklist { get; }
```

- *Type:* string[]

---

##### `QueryStringWhitelist`<sup>Required</sup> <a name="QueryStringWhitelist" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```csharp
public string[] QueryStringWhitelist { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```csharp
private GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceCdnPolicyOutputReference <a name="GoogleComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCdnPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">PutBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">PutCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">PutNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">ResetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">ResetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheMode">ResetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetClientTtl">ResetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching">ResetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">ResetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale">ResetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">ResetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBypassCacheOnRequestHeaders` <a name="PutBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```csharp
private void PutBypassCacheOnRequestHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutCacheKeyPolicy` <a name="PutCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```csharp
private void PutCacheKeyPolicy(GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `PutNegativeCachingPolicy` <a name="PutNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```csharp
private void PutNegativeCachingPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetBypassCacheOnRequestHeaders` <a name="ResetBypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```csharp
private void ResetBypassCacheOnRequestHeaders()
```

##### `ResetCacheKeyPolicy` <a name="ResetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```csharp
private void ResetCacheKeyPolicy()
```

##### `ResetCacheMode` <a name="ResetCacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```csharp
private void ResetCacheMode()
```

##### `ResetClientTtl` <a name="ResetClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```csharp
private void ResetClientTtl()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNegativeCaching` <a name="ResetNegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```csharp
private void ResetNegativeCaching()
```

##### `ResetNegativeCachingPolicy` <a name="ResetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```csharp
private void ResetNegativeCachingPolicy()
```

##### `ResetServeWhileStale` <a name="ResetServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```csharp
private void ResetServeWhileStale()
```

##### `ResetSignedUrlCacheMaxAgeSec` <a name="ResetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```csharp
private void ResetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">BypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">CacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">NegativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">BypassCacheOnRequestHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">CacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput">CacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput">ClientTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">NegativeCachingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">NegativeCachingPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">ServeWhileStaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">SignedUrlCacheMaxAgeSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">CacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">ClientTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">NegativeCaching</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">ServeWhileStale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">SignedUrlCacheMaxAgeSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BypassCacheOnRequestHeaders`<sup>Required</sup> <a name="BypassCacheOnRequestHeaders" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList BypassCacheOnRequestHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `CacheKeyPolicy`<sup>Required</sup> <a name="CacheKeyPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference CacheKeyPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `NegativeCachingPolicy`<sup>Required</sup> <a name="NegativeCachingPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList NegativeCachingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `BypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="BypassCacheOnRequestHeadersInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```csharp
public object BypassCacheOnRequestHeadersInput { get; }
```

- *Type:* object

---

##### `CacheKeyPolicyInput`<sup>Optional</sup> <a name="CacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy CacheKeyPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy">GoogleComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `CacheModeInput`<sup>Optional</sup> <a name="CacheModeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```csharp
public string CacheModeInput { get; }
```

- *Type:* string

---

##### `ClientTtlInput`<sup>Optional</sup> <a name="ClientTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```csharp
public double ClientTtlInput { get; }
```

- *Type:* double

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NegativeCachingInput`<sup>Optional</sup> <a name="NegativeCachingInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```csharp
public object NegativeCachingInput { get; }
```

- *Type:* object

---

##### `NegativeCachingPolicyInput`<sup>Optional</sup> <a name="NegativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```csharp
public object NegativeCachingPolicyInput { get; }
```

- *Type:* object

---

##### `ServeWhileStaleInput`<sup>Optional</sup> <a name="ServeWhileStaleInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```csharp
public double ServeWhileStaleInput { get; }
```

- *Type:* double

---

##### `SignedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="SignedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```csharp
public double SignedUrlCacheMaxAgeSecInput { get; }
```

- *Type:* double

---

##### `CacheMode`<sup>Required</sup> <a name="CacheMode" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```csharp
public string CacheMode { get; }
```

- *Type:* string

---

##### `ClientTtl`<sup>Required</sup> <a name="ClientTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```csharp
public double ClientTtl { get; }
```

- *Type:* double

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `NegativeCaching`<sup>Required</sup> <a name="NegativeCaching" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```csharp
public object NegativeCaching { get; }
```

- *Type:* object

---

##### `ServeWhileStale`<sup>Required</sup> <a name="ServeWhileStale" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```csharp
public double ServeWhileStale { get; }
```

- *Type:* double

---

##### `SignedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="SignedUrlCacheMaxAgeSec" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```csharp
public double SignedUrlCacheMaxAgeSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceCdnPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCdnPolicy">GoogleComputeBackendServiceCdnPolicy</a>

---


### GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakersConnectTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---


### GoogleComputeBackendServiceCircuitBreakersOutputReference <a name="GoogleComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceCircuitBreakersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout">PutConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests">ResetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">ResetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectTimeout` <a name="PutConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout"></a>

```csharp
private void PutConnectTimeout(GoogleComputeBackendServiceCircuitBreakersConnectTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.putConnectTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```csharp
private void ResetMaxPendingRequests()
```

##### `ResetMaxRequests` <a name="ResetMaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```csharp
private void ResetMaxRequests()
```

##### `ResetMaxRequestsPerConnection` <a name="ResetMaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```csharp
private void ResetMaxRequestsPerConnection()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">MaxRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">MaxRequestsPerConnectionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">MaxRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">MaxRequestsPerConnection</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference ConnectTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference">GoogleComputeBackendServiceCircuitBreakersConnectTimeoutOutputReference</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.connectTimeoutInput"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakersConnectTimeout ConnectTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersConnectTimeout">GoogleComputeBackendServiceCircuitBreakersConnectTimeout</a>

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```csharp
public double MaxPendingRequestsInput { get; }
```

- *Type:* double

---

##### `MaxRequestsInput`<sup>Optional</sup> <a name="MaxRequestsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```csharp
public double MaxRequestsInput { get; }
```

- *Type:* double

---

##### `MaxRequestsPerConnectionInput`<sup>Optional</sup> <a name="MaxRequestsPerConnectionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```csharp
public double MaxRequestsPerConnectionInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; }
```

- *Type:* double

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```csharp
public double MaxRequests { get; }
```

- *Type:* double

---

##### `MaxRequestsPerConnection`<sup>Required</sup> <a name="MaxRequestsPerConnection" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```csharp
public double MaxRequestsPerConnection { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceCircuitBreakers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceCircuitBreakers">GoogleComputeBackendServiceCircuitBreakers</a>

---


### GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```csharp
private void PutTtl(GoogleComputeBackendServiceConsistentHashHttpCookieTtl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference Ttl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookieTtl TtlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---


### GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookieTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieTtl">GoogleComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### GoogleComputeBackendServiceConsistentHashOutputReference <a name="GoogleComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceConsistentHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie">PutHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpCookie">ResetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName">ResetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize">ResetMinimumRingSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpCookie` <a name="PutHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```csharp
private void PutHttpCookie(GoogleComputeBackendServiceConsistentHashHttpCookie Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `ResetHttpCookie` <a name="ResetHttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```csharp
private void ResetHttpCookie()
```

##### `ResetHttpHeaderName` <a name="ResetHttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```csharp
private void ResetHttpHeaderName()
```

##### `ResetMinimumRingSize` <a name="ResetMinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```csharp
private void ResetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie">HttpCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput">HttpCookieInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">MinimumRingSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpCookie`<sup>Required</sup> <a name="HttpCookie" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference HttpCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference">GoogleComputeBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `HttpCookieInput`<sup>Optional</sup> <a name="HttpCookieInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```csharp
public GoogleComputeBackendServiceConsistentHashHttpCookie HttpCookieInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashHttpCookie">GoogleComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```csharp
public string HttpHeaderNameInput { get; }
```

- *Type:* string

---

##### `MinimumRingSizeInput`<sup>Optional</sup> <a name="MinimumRingSizeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```csharp
public double MinimumRingSizeInput { get; }
```

- *Type:* double

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```csharp
public string HttpHeaderName { get; }
```

- *Type:* string

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```csharp
public double MinimumRingSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceConsistentHash InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceConsistentHash">GoogleComputeBackendServiceConsistentHash</a>

---


### GoogleComputeBackendServiceIapOutputReference <a name="GoogleComputeBackendServiceIapOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceIapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientId">ResetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientSecret">ResetOauth2ClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauth2ClientId` <a name="ResetOauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```csharp
private void ResetOauth2ClientId()
```

##### `ResetOauth2ClientSecret` <a name="ResetOauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```csharp
private void ResetOauth2ClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">Oauth2ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput">Oauth2ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput">Oauth2ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">Oauth2ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecretSha256`<sup>Required</sup> <a name="Oauth2ClientSecretSha256" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```csharp
public string Oauth2ClientSecretSha256 { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Oauth2ClientIdInput`<sup>Optional</sup> <a name="Oauth2ClientIdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```csharp
public string Oauth2ClientIdInput { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecretInput`<sup>Optional</sup> <a name="Oauth2ClientSecretInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```csharp
public string Oauth2ClientSecretInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```csharp
public string Oauth2ClientId { get; }
```

- *Type:* string

---

##### `Oauth2ClientSecret`<sup>Required</sup> <a name="Oauth2ClientSecret" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```csharp
public string Oauth2ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIapOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceIap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceIap">GoogleComputeBackendServiceIap</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### GoogleComputeBackendServiceLocalityLbPoliciesList <a name="GoogleComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get"></a>

```csharp
private GoogleComputeBackendServiceLocalityLbPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceLocalityLbPoliciesOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy">PutCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy">ResetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicy` <a name="PutCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy"></a>

```csharp
private void PutCustomPolicy(GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy"></a>

```csharp
private void PutPolicy(GoogleComputeBackendServiceLocalityLbPoliciesPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `ResetCustomPolicy` <a name="ResetCustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy"></a>

```csharp
private void ResetCustomPolicy()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">CustomPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput">CustomPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput">PolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPolicy`<sup>Required</sup> <a name="CustomPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference CustomPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a>

---

##### `CustomPolicyInput`<sup>Optional</sup> <a name="CustomPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy CustomPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy">GoogleComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesPolicy PolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceLocalityLbPoliciesPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLocalityLbPoliciesPolicy">GoogleComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### GoogleComputeBackendServiceLogConfigOutputReference <a name="GoogleComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```csharp
private void ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```csharp
public double SampleRateInput { get; }
```

- *Type:* double

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceLogConfig">GoogleComputeBackendServiceLogConfig</a>

---


### GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---


### GoogleComputeBackendServiceOutlierDetectionOutputReference <a name="GoogleComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceOutlierDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">PutBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval">PutInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">ResetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">ResetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">ResetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">ResetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">ResetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">ResetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">ResetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">ResetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">ResetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">ResetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseEjectionTime` <a name="PutBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```csharp
private void PutBaseEjectionTime(GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `PutInterval` <a name="PutInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```csharp
private void PutInterval(GoogleComputeBackendServiceOutlierDetectionInterval Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---

##### `ResetBaseEjectionTime` <a name="ResetBaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```csharp
private void ResetBaseEjectionTime()
```

##### `ResetConsecutiveErrors` <a name="ResetConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```csharp
private void ResetConsecutiveErrors()
```

##### `ResetConsecutiveGatewayFailure` <a name="ResetConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```csharp
private void ResetConsecutiveGatewayFailure()
```

##### `ResetEnforcingConsecutiveErrors` <a name="ResetEnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```csharp
private void ResetEnforcingConsecutiveErrors()
```

##### `ResetEnforcingConsecutiveGatewayFailure` <a name="ResetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```csharp
private void ResetEnforcingConsecutiveGatewayFailure()
```

##### `ResetEnforcingSuccessRate` <a name="ResetEnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```csharp
private void ResetEnforcingSuccessRate()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMaxEjectionPercent` <a name="ResetMaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```csharp
private void ResetMaxEjectionPercent()
```

##### `ResetSuccessRateMinimumHosts` <a name="ResetSuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```csharp
private void ResetSuccessRateMinimumHosts()
```

##### `ResetSuccessRateRequestVolume` <a name="ResetSuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```csharp
private void ResetSuccessRateRequestVolume()
```

##### `ResetSuccessRateStdevFactor` <a name="ResetSuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```csharp
private void ResetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval">Interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">BaseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">ConsecutiveErrorsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">ConsecutiveGatewayFailureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">EnforcingConsecutiveErrorsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">EnforcingConsecutiveGatewayFailureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">EnforcingSuccessRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput">IntervalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">MaxEjectionPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">SuccessRateMinimumHostsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">SuccessRateRequestVolumeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">SuccessRateStdevFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">ConsecutiveErrors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">ConsecutiveGatewayFailure</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">EnforcingConsecutiveErrors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">EnforcingConsecutiveGatewayFailure</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">EnforcingSuccessRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">SuccessRateMinimumHosts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">SuccessRateRequestVolume</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">SuccessRateStdevFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference BaseEjectionTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference Interval { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference">GoogleComputeBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `BaseEjectionTimeInput`<sup>Optional</sup> <a name="BaseEjectionTimeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime BaseEjectionTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime">GoogleComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `ConsecutiveErrorsInput`<sup>Optional</sup> <a name="ConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```csharp
public double ConsecutiveErrorsInput { get; }
```

- *Type:* double

---

##### `ConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="ConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```csharp
public double ConsecutiveGatewayFailureInput { get; }
```

- *Type:* double

---

##### `EnforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="EnforcingConsecutiveErrorsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```csharp
public double EnforcingConsecutiveErrorsInput { get; }
```

- *Type:* double

---

##### `EnforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="EnforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```csharp
public double EnforcingConsecutiveGatewayFailureInput { get; }
```

- *Type:* double

---

##### `EnforcingSuccessRateInput`<sup>Optional</sup> <a name="EnforcingSuccessRateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```csharp
public double EnforcingSuccessRateInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetectionInterval IntervalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionInterval">GoogleComputeBackendServiceOutlierDetectionInterval</a>

---

##### `MaxEjectionPercentInput`<sup>Optional</sup> <a name="MaxEjectionPercentInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```csharp
public double MaxEjectionPercentInput { get; }
```

- *Type:* double

---

##### `SuccessRateMinimumHostsInput`<sup>Optional</sup> <a name="SuccessRateMinimumHostsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```csharp
public double SuccessRateMinimumHostsInput { get; }
```

- *Type:* double

---

##### `SuccessRateRequestVolumeInput`<sup>Optional</sup> <a name="SuccessRateRequestVolumeInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```csharp
public double SuccessRateRequestVolumeInput { get; }
```

- *Type:* double

---

##### `SuccessRateStdevFactorInput`<sup>Optional</sup> <a name="SuccessRateStdevFactorInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```csharp
public double SuccessRateStdevFactorInput { get; }
```

- *Type:* double

---

##### `ConsecutiveErrors`<sup>Required</sup> <a name="ConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```csharp
public double ConsecutiveErrors { get; }
```

- *Type:* double

---

##### `ConsecutiveGatewayFailure`<sup>Required</sup> <a name="ConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```csharp
public double ConsecutiveGatewayFailure { get; }
```

- *Type:* double

---

##### `EnforcingConsecutiveErrors`<sup>Required</sup> <a name="EnforcingConsecutiveErrors" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```csharp
public double EnforcingConsecutiveErrors { get; }
```

- *Type:* double

---

##### `EnforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="EnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```csharp
public double EnforcingConsecutiveGatewayFailure { get; }
```

- *Type:* double

---

##### `EnforcingSuccessRate`<sup>Required</sup> <a name="EnforcingSuccessRate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```csharp
public double EnforcingSuccessRate { get; }
```

- *Type:* double

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; }
```

- *Type:* double

---

##### `SuccessRateMinimumHosts`<sup>Required</sup> <a name="SuccessRateMinimumHosts" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```csharp
public double SuccessRateMinimumHosts { get; }
```

- *Type:* double

---

##### `SuccessRateRequestVolume`<sup>Required</sup> <a name="SuccessRateRequestVolume" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```csharp
public double SuccessRateRequestVolume { get; }
```

- *Type:* double

---

##### `SuccessRateStdevFactor`<sup>Required</sup> <a name="SuccessRateStdevFactor" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```csharp
public double SuccessRateStdevFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceOutlierDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceOutlierDetection">GoogleComputeBackendServiceOutlierDetection</a>

---


### GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference <a name="GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion">ResetAccessKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion">ResetOriginRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetAccessKeyVersion` <a name="ResetAccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion"></a>

```csharp
private void ResetAccessKeyVersion()
```

##### `ResetOriginRegion` <a name="ResetOriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion"></a>

```csharp
private void ResetOriginRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput">AccessKeyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput">OriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion">AccessKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion">OriginRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyVersionInput`<sup>Optional</sup> <a name="AccessKeyVersionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput"></a>

```csharp
public string AccessKeyVersionInput { get; }
```

- *Type:* string

---

##### `OriginRegionInput`<sup>Optional</sup> <a name="OriginRegionInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```csharp
public string OriginRegionInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AccessKeyVersion`<sup>Required</sup> <a name="AccessKeyVersion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion"></a>

```csharp
public string AccessKeyVersion { get; }
```

- *Type:* string

---

##### `OriginRegion`<sup>Required</sup> <a name="OriginRegion" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion"></a>

```csharp
public string OriginRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---


### GoogleComputeBackendServiceSecuritySettingsOutputReference <a name="GoogleComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceSecuritySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication">PutAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication">ResetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy">ResetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames">ResetSubjectAltNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsV4Authentication` <a name="PutAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication"></a>

```csharp
private void PutAwsV4Authentication(GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `ResetAwsV4Authentication` <a name="ResetAwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication"></a>

```csharp
private void ResetAwsV4Authentication()
```

##### `ResetClientTlsPolicy` <a name="ResetClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy"></a>

```csharp
private void ResetClientTlsPolicy()
```

##### `ResetSubjectAltNames` <a name="ResetSubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames"></a>

```csharp
private void ResetSubjectAltNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication">AwsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput">AwsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput">ClientTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput">SubjectAltNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">ClientTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">SubjectAltNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsV4Authentication`<sup>Required</sup> <a name="AwsV4Authentication" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference AwsV4Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">GoogleComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a>

---

##### `AwsV4AuthenticationInput`<sup>Optional</sup> <a name="AwsV4AuthenticationInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication AwsV4AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication">GoogleComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `ClientTlsPolicyInput`<sup>Optional</sup> <a name="ClientTlsPolicyInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput"></a>

```csharp
public string ClientTlsPolicyInput { get; }
```

- *Type:* string

---

##### `SubjectAltNamesInput`<sup>Optional</sup> <a name="SubjectAltNamesInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput"></a>

```csharp
public string[] SubjectAltNamesInput { get; }
```

- *Type:* string[]

---

##### `ClientTlsPolicy`<sup>Required</sup> <a name="ClientTlsPolicy" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```csharp
public string ClientTlsPolicy { get; }
```

- *Type:* string

---

##### `SubjectAltNames`<sup>Required</sup> <a name="SubjectAltNames" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```csharp
public string[] SubjectAltNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceSecuritySettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceSecuritySettings">GoogleComputeBackendServiceSecuritySettings</a>

---


### GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```csharp
private void PutTtl(GoogleComputeBackendServiceStrongSessionAffinityCookieTtl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference Ttl { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtl TtlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookie InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookie">GoogleComputeBackendServiceStrongSessionAffinityCookie</a>

---


### GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeBackendServiceStrongSessionAffinityCookieTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceStrongSessionAffinityCookieTtl">GoogleComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---


### GoogleComputeBackendServiceTimeoutsOutputReference <a name="GoogleComputeBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeBackendServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeBackendService.GoogleComputeBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



