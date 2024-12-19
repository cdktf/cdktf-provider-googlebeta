# `googleComputeHealthCheck` Submodule <a name="`googleComputeHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHealthCheck <a name="GoogleComputeHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check google_compute_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheck(Construct Scope, string Id, GoogleComputeHealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig">GoogleComputeHealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig">GoogleComputeHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck">PutGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck">PutHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck">PutHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck">PutHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck">PutSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck">PutTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetCheckIntervalSec">ResetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetGrpcHealthCheck">ResetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttp2HealthCheck">ResetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpHealthCheck">ResetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpsHealthCheck">ResetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSourceRegions">ResetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSslHealthCheck">ResetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTcpHealthCheck">ResetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeoutSec">ResetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGrpcHealthCheck` <a name="PutGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck"></a>

```csharp
private void PutGrpcHealthCheck(GoogleComputeHealthCheckGrpcHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---

##### `PutHttp2HealthCheck` <a name="PutHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck"></a>

```csharp
private void PutHttp2HealthCheck(GoogleComputeHealthCheckHttp2HealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---

##### `PutHttpHealthCheck` <a name="PutHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck"></a>

```csharp
private void PutHttpHealthCheck(GoogleComputeHealthCheckHttpHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---

##### `PutHttpsHealthCheck` <a name="PutHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck"></a>

```csharp
private void PutHttpsHealthCheck(GoogleComputeHealthCheckHttpsHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig"></a>

```csharp
private void PutLogConfig(GoogleComputeHealthCheckLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---

##### `PutSslHealthCheck` <a name="PutSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck"></a>

```csharp
private void PutSslHealthCheck(GoogleComputeHealthCheckSslHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---

##### `PutTcpHealthCheck` <a name="PutTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck"></a>

```csharp
private void PutTcpHealthCheck(GoogleComputeHealthCheckTcpHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeHealthCheckTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

---

##### `ResetCheckIntervalSec` <a name="ResetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetCheckIntervalSec"></a>

```csharp
private void ResetCheckIntervalSec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGrpcHealthCheck` <a name="ResetGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetGrpcHealthCheck"></a>

```csharp
private void ResetGrpcHealthCheck()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetHttp2HealthCheck` <a name="ResetHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttp2HealthCheck"></a>

```csharp
private void ResetHttp2HealthCheck()
```

##### `ResetHttpHealthCheck` <a name="ResetHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpHealthCheck"></a>

```csharp
private void ResetHttpHealthCheck()
```

##### `ResetHttpsHealthCheck` <a name="ResetHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetHttpsHealthCheck"></a>

```csharp
private void ResetHttpsHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSourceRegions` <a name="ResetSourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSourceRegions"></a>

```csharp
private void ResetSourceRegions()
```

##### `ResetSslHealthCheck` <a name="ResetSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetSslHealthCheck"></a>

```csharp
private void ResetSslHealthCheck()
```

##### `ResetTcpHealthCheck` <a name="ResetTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTcpHealthCheck"></a>

```csharp
private void ResetTcpHealthCheck()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeoutSec` <a name="ResetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetTimeoutSec"></a>

```csharp
private void ResetTimeoutSec()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeHealthCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeHealthCheck resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeHealthCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference">GoogleComputeHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference">GoogleComputeHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference">GoogleComputeHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference">GoogleComputeHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference">GoogleComputeHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference">GoogleComputeHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference">GoogleComputeHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference">GoogleComputeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSecInput">CheckIntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheckInput">GrpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheckInput">Http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheckInput">HttpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheckInput">HttpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegionsInput">SourceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheckInput">SslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheckInput">TcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSecInput">TimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegions">SourceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `GrpcHealthCheck`<sup>Required</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckGrpcHealthCheckOutputReference GrpcHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference">GoogleComputeHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `Http2HealthCheck`<sup>Required</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheck"></a>

```csharp
public GoogleComputeHealthCheckHttp2HealthCheckOutputReference Http2HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference">GoogleComputeHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `HttpHealthCheck`<sup>Required</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckHttpHealthCheckOutputReference HttpHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference">GoogleComputeHealthCheckHttpHealthCheckOutputReference</a>

---

##### `HttpsHealthCheck`<sup>Required</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckHttpsHealthCheckOutputReference HttpsHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference">GoogleComputeHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfig"></a>

```csharp
public GoogleComputeHealthCheckLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference">GoogleComputeHealthCheckLogConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SslHealthCheck`<sup>Required</sup> <a name="SslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckSslHealthCheckOutputReference SslHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference">GoogleComputeHealthCheckSslHealthCheckOutputReference</a>

---

##### `TcpHealthCheck`<sup>Required</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckTcpHealthCheckOutputReference TcpHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference">GoogleComputeHealthCheckTcpHealthCheckOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeouts"></a>

```csharp
public GoogleComputeHealthCheckTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference">GoogleComputeHealthCheckTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CheckIntervalSecInput`<sup>Optional</sup> <a name="CheckIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSecInput"></a>

```csharp
public double CheckIntervalSecInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GrpcHealthCheckInput`<sup>Optional</sup> <a name="GrpcHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.grpcHealthCheckInput"></a>

```csharp
public GoogleComputeHealthCheckGrpcHealthCheck GrpcHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `Http2HealthCheckInput`<sup>Optional</sup> <a name="Http2HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.http2HealthCheckInput"></a>

```csharp
public GoogleComputeHealthCheckHttp2HealthCheck Http2HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---

##### `HttpHealthCheckInput`<sup>Optional</sup> <a name="HttpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpHealthCheckInput"></a>

```csharp
public GoogleComputeHealthCheckHttpHealthCheck HttpHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---

##### `HttpsHealthCheckInput`<sup>Optional</sup> <a name="HttpsHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.httpsHealthCheckInput"></a>

```csharp
public GoogleComputeHealthCheckHttpsHealthCheck HttpsHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.logConfigInput"></a>

```csharp
public GoogleComputeHealthCheckLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SourceRegionsInput`<sup>Optional</sup> <a name="SourceRegionsInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegionsInput"></a>

```csharp
public string[] SourceRegionsInput { get; }
```

- *Type:* string[]

---

##### `SslHealthCheckInput`<sup>Optional</sup> <a name="SslHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sslHealthCheckInput"></a>

```csharp
public GoogleComputeHealthCheckSslHealthCheck SslHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---

##### `TcpHealthCheckInput`<sup>Optional</sup> <a name="TcpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tcpHealthCheckInput"></a>

```csharp
public GoogleComputeHealthCheckTcpHealthCheck TcpHealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---

##### `TimeoutSecInput`<sup>Optional</sup> <a name="TimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSecInput"></a>

```csharp
public double TimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `CheckIntervalSec`<sup>Required</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SourceRegions`<sup>Required</sup> <a name="SourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.sourceRegions"></a>

```csharp
public string[] SourceRegions { get; }
```

- *Type:* string[]

---

##### `TimeoutSec`<sup>Required</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHealthCheckConfig <a name="GoogleComputeHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double CheckIntervalSec = null,
    string Description = null,
    GoogleComputeHealthCheckGrpcHealthCheck GrpcHealthCheck = null,
    double HealthyThreshold = null,
    GoogleComputeHealthCheckHttp2HealthCheck Http2HealthCheck = null,
    GoogleComputeHealthCheckHttpHealthCheck HttpHealthCheck = null,
    GoogleComputeHealthCheckHttpsHealthCheck HttpsHealthCheck = null,
    string Id = null,
    GoogleComputeHealthCheckLogConfig LogConfig = null,
    string Project = null,
    string[] SourceRegions = null,
    GoogleComputeHealthCheckSslHealthCheck SslHealthCheck = null,
    GoogleComputeHealthCheckTcpHealthCheck TcpHealthCheck = null,
    GoogleComputeHealthCheckTimeouts Timeouts = null,
    double TimeoutSec = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.checkIntervalSec">CheckIntervalSec</a></code> | <code>double</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.grpcHealthCheck">GrpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.http2HealthCheck">Http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpHealthCheck">HttpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpsHealthCheck">HttpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sourceRegions">SourceRegions</a></code> | <code>string[]</code> | The list of cloud regions from which health checks are performed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sslHealthCheck">SslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.tcpHealthCheck">TcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeoutSec">TimeoutSec</a></code> | <code>double</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#name GoogleComputeHealthCheck#name}

---

##### `CheckIntervalSec`<sup>Optional</sup> <a name="CheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.checkIntervalSec"></a>

```csharp
public double CheckIntervalSec { get; set; }
```

- *Type:* double

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#check_interval_sec GoogleComputeHealthCheck#check_interval_sec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#description GoogleComputeHealthCheck#description}

---

##### `GrpcHealthCheck`<sup>Optional</sup> <a name="GrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.grpcHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckGrpcHealthCheck GrpcHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#grpc_health_check GoogleComputeHealthCheck#grpc_health_check}

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#healthy_threshold GoogleComputeHealthCheck#healthy_threshold}

---

##### `Http2HealthCheck`<sup>Optional</sup> <a name="Http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.http2HealthCheck"></a>

```csharp
public GoogleComputeHealthCheckHttp2HealthCheck Http2HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#http2_health_check GoogleComputeHealthCheck#http2_health_check}

---

##### `HttpHealthCheck`<sup>Optional</sup> <a name="HttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckHttpHealthCheck HttpHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#http_health_check GoogleComputeHealthCheck#http_health_check}

---

##### `HttpsHealthCheck`<sup>Optional</sup> <a name="HttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.httpsHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckHttpsHealthCheck HttpsHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#https_health_check GoogleComputeHealthCheck#https_health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#id GoogleComputeHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.logConfig"></a>

```csharp
public GoogleComputeHealthCheckLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#log_config GoogleComputeHealthCheck#log_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#project GoogleComputeHealthCheck#project}.

---

##### `SourceRegions`<sup>Optional</sup> <a name="SourceRegions" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sourceRegions"></a>

```csharp
public string[] SourceRegions { get; set; }
```

- *Type:* string[]

The list of cloud regions from which health checks are performed.

If
any regions are specified, then exactly 3 regions should be specified.
The region names must be valid names of Google Cloud regions. This can
only be set for global health check. If this list is non-empty, then
there are restrictions on what other health check fields are supported
and what other resources can use this health check:

* SSL, HTTP2, and GRPC protocols are not supported.
* The TCP request field is not supported.
* The proxyHeader field for HTTP, HTTPS, and TCP is not supported.
* The checkIntervalSec field must be at least 30.
* The health check cannot be used with BackendService nor with managed
  instance group auto-healing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#source_regions GoogleComputeHealthCheck#source_regions}

---

##### `SslHealthCheck`<sup>Optional</sup> <a name="SslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.sslHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckSslHealthCheck SslHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#ssl_health_check GoogleComputeHealthCheck#ssl_health_check}

---

##### `TcpHealthCheck`<sup>Optional</sup> <a name="TcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.tcpHealthCheck"></a>

```csharp
public GoogleComputeHealthCheckTcpHealthCheck TcpHealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#tcp_health_check GoogleComputeHealthCheck#tcp_health_check}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeouts"></a>

```csharp
public GoogleComputeHealthCheckTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts">GoogleComputeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#timeouts GoogleComputeHealthCheck#timeouts}

---

##### `TimeoutSec`<sup>Optional</sup> <a name="TimeoutSec" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.timeoutSec"></a>

```csharp
public double TimeoutSec { get; set; }
```

- *Type:* double

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#timeout_sec GoogleComputeHealthCheck#timeout_sec}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckConfig.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#unhealthy_threshold GoogleComputeHealthCheck#unhealthy_threshold}

---

### GoogleComputeHealthCheckGrpcHealthCheck <a name="GoogleComputeHealthCheckGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckGrpcHealthCheck {
    string GrpcServiceName = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.grpcServiceName">GrpcServiceName</a></code> | <code>string</code> | The gRPC service name for the health check. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.port">Port</a></code> | <code>double</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `GrpcServiceName`<sup>Optional</sup> <a name="GrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```csharp
public string GrpcServiceName { get; set; }
```

- *Type:* string

The gRPC service name for the health check.

The value of grpcServiceName has the following meanings by convention:

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
  The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#grpc_service_name GoogleComputeHealthCheck#grpc_service_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

### GoogleComputeHealthCheckHttp2HealthCheck <a name="GoogleComputeHealthCheckHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckHttp2HealthCheck {
    string Host = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string RequestPath = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckHttpHealthCheck <a name="GoogleComputeHealthCheckHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckHttpHealthCheck {
    string Host = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string RequestPath = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckHttpsHealthCheck <a name="GoogleComputeHealthCheckHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckHttpsHealthCheck {
    string Host = null,
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string RequestPath = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.host">Host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.requestPath">RequestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#host GoogleComputeHealthCheck#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.requestPath"></a>

```csharp
public string RequestPath { get; set; }
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#request_path GoogleComputeHealthCheck#request_path}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckLogConfig <a name="GoogleComputeHealthCheckLogConfig" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckLogConfig {
    object Enable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.property.enable">Enable</a></code> | <code>object</code> | Indicates whether or not to export logs. |

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#enable GoogleComputeHealthCheck#enable}

---

### GoogleComputeHealthCheckSslHealthCheck <a name="GoogleComputeHealthCheckSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckSslHealthCheck {
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string Request = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.request">Request</a></code> | <code>string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#request GoogleComputeHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckTcpHealthCheck <a name="GoogleComputeHealthCheckTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckTcpHealthCheck {
    double Port = null,
    string PortName = null,
    string PortSpecification = null,
    string ProxyHeader = null,
    string Request = null,
    string Response = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.port">Port</a></code> | <code>double</code> | The TCP port number for the TCP health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portName">PortName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portSpecification">PortSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.request">Request</a></code> | <code>string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.response">Response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The TCP port number for the TCP health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port GoogleComputeHealthCheck#port}

---

##### `PortName`<sup>Optional</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portName"></a>

```csharp
public string PortName { get; set; }
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_name GoogleComputeHealthCheck#port_name}

---

##### `PortSpecification`<sup>Optional</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.portSpecification"></a>

```csharp
public string PortSpecification { get; set; }
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.
  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
    network endpoint is used for health checking. For other backends, the
    port or named port specified in the Backend Service is used for health
    checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#port_specification GoogleComputeHealthCheck#port_specification}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#proxy_header GoogleComputeHealthCheck#proxy_header}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#request GoogleComputeHealthCheck#request}

---

##### `Response`<sup>Optional</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck.property.response"></a>

```csharp
public string Response { get; set; }
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#response GoogleComputeHealthCheck#response}

---

### GoogleComputeHealthCheckTimeouts <a name="GoogleComputeHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#create GoogleComputeHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#delete GoogleComputeHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#update GoogleComputeHealthCheck#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#create GoogleComputeHealthCheck#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#delete GoogleComputeHealthCheck#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_health_check#update GoogleComputeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHealthCheckGrpcHealthCheckOutputReference <a name="GoogleComputeHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckGrpcHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">ResetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrpcServiceName` <a name="ResetGrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```csharp
private void ResetGrpcServiceName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">GrpcServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">GrpcServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrpcServiceNameInput`<sup>Optional</sup> <a name="GrpcServiceNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```csharp
public string GrpcServiceNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `GrpcServiceName`<sup>Required</sup> <a name="GrpcServiceName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```csharp
public string GrpcServiceName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckGrpcHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckGrpcHealthCheck">GoogleComputeHealthCheckGrpcHealthCheck</a>

---


### GoogleComputeHealthCheckHttp2HealthCheckOutputReference <a name="GoogleComputeHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckHttp2HealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckHttp2HealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttp2HealthCheck">GoogleComputeHealthCheckHttp2HealthCheck</a>

---


### GoogleComputeHealthCheckHttpHealthCheckOutputReference <a name="GoogleComputeHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckHttpHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckHttpHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpHealthCheck">GoogleComputeHealthCheckHttpHealthCheck</a>

---


### GoogleComputeHealthCheckHttpsHealthCheckOutputReference <a name="GoogleComputeHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckHttpsHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```csharp
private void ResetRequestPath()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath">RequestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```csharp
public string RequestPathInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```csharp
public string RequestPath { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckHttpsHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckHttpsHealthCheck">GoogleComputeHealthCheckHttpsHealthCheck</a>

---


### GoogleComputeHealthCheckLogConfigOutputReference <a name="GoogleComputeHealthCheckLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resetEnable">ResetEnable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.resetEnable"></a>

```csharp
private void ResetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckLogConfig">GoogleComputeHealthCheckLogConfig</a>

---


### GoogleComputeHealthCheckSslHealthCheckOutputReference <a name="GoogleComputeHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckSslHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```csharp
private void ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckSslHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckSslHealthCheck">GoogleComputeHealthCheckSslHealthCheck</a>

---


### GoogleComputeHealthCheckTcpHealthCheckOutputReference <a name="GoogleComputeHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckTcpHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortName">ResetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">ResetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetResponse">ResetResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortName` <a name="ResetPortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```csharp
private void ResetPortName()
```

##### `ResetPortSpecification` <a name="ResetPortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```csharp
private void ResetPortSpecification()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```csharp
private void ResetRequest()
```

##### `ResetResponse` <a name="ResetResponse" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```csharp
private void ResetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput">PortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">PortSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput">ResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portName">PortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification">PortSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.response">Response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortNameInput`<sup>Optional</sup> <a name="PortNameInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```csharp
public string PortNameInput { get; }
```

- *Type:* string

---

##### `PortSpecificationInput`<sup>Optional</sup> <a name="PortSpecificationInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```csharp
public string PortSpecificationInput { get; }
```

- *Type:* string

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `ResponseInput`<sup>Optional</sup> <a name="ResponseInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```csharp
public string ResponseInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```csharp
public string PortName { get; }
```

- *Type:* string

---

##### `PortSpecification`<sup>Required</sup> <a name="PortSpecification" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```csharp
public string PortSpecification { get; }
```

- *Type:* string

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `Response`<sup>Required</sup> <a name="Response" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```csharp
public string Response { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeHealthCheckTcpHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTcpHealthCheck">GoogleComputeHealthCheckTcpHealthCheck</a>

---


### GoogleComputeHealthCheckTimeoutsOutputReference <a name="GoogleComputeHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeHealthCheckTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeHealthCheck.GoogleComputeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



