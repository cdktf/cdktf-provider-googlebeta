# `googleCloudfunctionsFunction` Submodule <a name="`googleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudfunctionsFunction <a name="GoogleCloudfunctionsFunction" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunction(Construct Scope, string Id, GoogleCloudfunctionsFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig">GoogleCloudfunctionsFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig">GoogleCloudfunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger">PutEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables">PutSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes">PutSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository">PutSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb">ResetAvailableMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables">ResetBuildEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount">ResetBuildServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool">ResetBuildWorkerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry">ResetDockerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository">ResetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger">ResetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel">ResetHttpsTriggerSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl">ResetHttpsTriggerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings">ResetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables">ResetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes">ResetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket">ResetSourceArchiveBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject">ResetSourceArchiveObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository">ResetSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp">ResetTriggerHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector">ResetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings">ResetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTrigger` <a name="PutEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger"></a>

```csharp
private void PutEventTrigger(GoogleCloudfunctionsFunctionEventTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `PutSecretEnvironmentVariables` <a name="PutSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables"></a>

```csharp
private void PutSecretEnvironmentVariables(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* object

---

##### `PutSecretVolumes` <a name="PutSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes"></a>

```csharp
private void PutSecretVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes.parameter.value"></a>

- *Type:* object

---

##### `PutSourceRepository` <a name="PutSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository"></a>

```csharp
private void PutSourceRepository(GoogleCloudfunctionsFunctionSourceRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudfunctionsFunctionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

---

##### `ResetAvailableMemoryMb` <a name="ResetAvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb"></a>

```csharp
private void ResetAvailableMemoryMb()
```

##### `ResetBuildEnvironmentVariables` <a name="ResetBuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables"></a>

```csharp
private void ResetBuildEnvironmentVariables()
```

##### `ResetBuildServiceAccount` <a name="ResetBuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount"></a>

```csharp
private void ResetBuildServiceAccount()
```

##### `ResetBuildWorkerPool` <a name="ResetBuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool"></a>

```csharp
private void ResetBuildWorkerPool()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDockerRegistry` <a name="ResetDockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry"></a>

```csharp
private void ResetDockerRegistry()
```

##### `ResetDockerRepository` <a name="ResetDockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository"></a>

```csharp
private void ResetDockerRepository()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetEventTrigger` <a name="ResetEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger"></a>

```csharp
private void ResetEventTrigger()
```

##### `ResetHttpsTriggerSecurityLevel` <a name="ResetHttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel"></a>

```csharp
private void ResetHttpsTriggerSecurityLevel()
```

##### `ResetHttpsTriggerUrl` <a name="ResetHttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl"></a>

```csharp
private void ResetHttpsTriggerUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngressSettings` <a name="ResetIngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings"></a>

```csharp
private void ResetIngressSettings()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances"></a>

```csharp
private void ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances"></a>

```csharp
private void ResetMinInstances()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretEnvironmentVariables` <a name="ResetSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables"></a>

```csharp
private void ResetSecretEnvironmentVariables()
```

##### `ResetSecretVolumes` <a name="ResetSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes"></a>

```csharp
private void ResetSecretVolumes()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail"></a>

```csharp
private void ResetServiceAccountEmail()
```

##### `ResetSourceArchiveBucket` <a name="ResetSourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket"></a>

```csharp
private void ResetSourceArchiveBucket()
```

##### `ResetSourceArchiveObject` <a name="ResetSourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject"></a>

```csharp
private void ResetSourceArchiveObject()
```

##### `ResetSourceRepository` <a name="ResetSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository"></a>

```csharp
private void ResetSourceRepository()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggerHttp` <a name="ResetTriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp"></a>

```csharp
private void ResetTriggerHttp()
```

##### `ResetVpcConnector` <a name="ResetVpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector"></a>

```csharp
private void ResetVpcConnector()
```

##### `ResetVpcConnectorEgressSettings` <a name="ResetVpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings"></a>

```csharp
private void ResetVpcConnectorEgressSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudfunctionsFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudfunctionsFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudfunctionsFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCloudfunctionsFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudfunctionsFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput">AvailableMemoryMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput">BuildEnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput">BuildServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput">BuildWorkerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput">DockerRegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput">DockerRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput">EntryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput">EventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput">HttpsTriggerSecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput">HttpsTriggerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput">IngressSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput">MinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput">SecretEnvironmentVariablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput">SecretVolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput">SourceArchiveBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput">SourceArchiveObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput">SourceRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput">TriggerHttpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput">VpcConnectorEgressSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput">VpcConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount">BuildServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry">DockerRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository">DockerRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint">EntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings">IngressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp">TriggerHttp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector">VpcConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTriggerOutputReference EventTrigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a>

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```csharp
public GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList SecretEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes"></a>

```csharp
public GoogleCloudfunctionsFunctionSecretVolumesList SecretVolumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `SourceRepository`<sup>Required</sup> <a name="SourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository"></a>

```csharp
public GoogleCloudfunctionsFunctionSourceRepositoryOutputReference SourceRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts"></a>

```csharp
public GoogleCloudfunctionsFunctionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a>

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `AvailableMemoryMbInput`<sup>Optional</sup> <a name="AvailableMemoryMbInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput"></a>

```csharp
public double AvailableMemoryMbInput { get; }
```

- *Type:* double

---

##### `BuildEnvironmentVariablesInput`<sup>Optional</sup> <a name="BuildEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildEnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildServiceAccountInput`<sup>Optional</sup> <a name="BuildServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput"></a>

```csharp
public string BuildServiceAccountInput { get; }
```

- *Type:* string

---

##### `BuildWorkerPoolInput`<sup>Optional</sup> <a name="BuildWorkerPoolInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput"></a>

```csharp
public string BuildWorkerPoolInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DockerRegistryInput`<sup>Optional</sup> <a name="DockerRegistryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput"></a>

```csharp
public string DockerRegistryInput { get; }
```

- *Type:* string

---

##### `DockerRepositoryInput`<sup>Optional</sup> <a name="DockerRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput"></a>

```csharp
public string DockerRepositoryInput { get; }
```

- *Type:* string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput"></a>

```csharp
public string EntryPointInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EventTriggerInput`<sup>Optional</sup> <a name="EventTriggerInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTrigger EventTriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `HttpsTriggerSecurityLevelInput`<sup>Optional</sup> <a name="HttpsTriggerSecurityLevelInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput"></a>

```csharp
public string HttpsTriggerSecurityLevelInput { get; }
```

- *Type:* string

---

##### `HttpsTriggerUrlInput`<sup>Optional</sup> <a name="HttpsTriggerUrlInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput"></a>

```csharp
public string HttpsTriggerUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressSettingsInput`<sup>Optional</sup> <a name="IngressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput"></a>

```csharp
public string IngressSettingsInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput"></a>

```csharp
public double MinInstancesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `SecretEnvironmentVariablesInput`<sup>Optional</sup> <a name="SecretEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput"></a>

```csharp
public object SecretEnvironmentVariablesInput { get; }
```

- *Type:* object

---

##### `SecretVolumesInput`<sup>Optional</sup> <a name="SecretVolumesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput"></a>

```csharp
public object SecretVolumesInput { get; }
```

- *Type:* object

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `SourceArchiveBucketInput`<sup>Optional</sup> <a name="SourceArchiveBucketInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput"></a>

```csharp
public string SourceArchiveBucketInput { get; }
```

- *Type:* string

---

##### `SourceArchiveObjectInput`<sup>Optional</sup> <a name="SourceArchiveObjectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput"></a>

```csharp
public string SourceArchiveObjectInput { get; }
```

- *Type:* string

---

##### `SourceRepositoryInput`<sup>Optional</sup> <a name="SourceRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput"></a>

```csharp
public GoogleCloudfunctionsFunctionSourceRepository SourceRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggerHttpInput`<sup>Optional</sup> <a name="TriggerHttpInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput"></a>

```csharp
public object TriggerHttpInput { get; }
```

- *Type:* object

---

##### `VpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="VpcConnectorEgressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput"></a>

```csharp
public string VpcConnectorEgressSettingsInput { get; }
```

- *Type:* string

---

##### `VpcConnectorInput`<sup>Optional</sup> <a name="VpcConnectorInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput"></a>

```csharp
public string VpcConnectorInput { get; }
```

- *Type:* string

---

##### `AvailableMemoryMb`<sup>Required</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```csharp
public double AvailableMemoryMb { get; }
```

- *Type:* double

---

##### `BuildEnvironmentVariables`<sup>Required</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildEnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildServiceAccount`<sup>Required</sup> <a name="BuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount"></a>

```csharp
public string BuildServiceAccount { get; }
```

- *Type:* string

---

##### `BuildWorkerPool`<sup>Required</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```csharp
public string BuildWorkerPool { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DockerRegistry`<sup>Required</sup> <a name="DockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```csharp
public string DockerRegistry { get; }
```

- *Type:* string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository"></a>

```csharp
public string DockerRepository { get; }
```

- *Type:* string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint"></a>

```csharp
public string EntryPoint { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HttpsTriggerSecurityLevel`<sup>Required</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```csharp
public string HttpsTriggerSecurityLevel { get; }
```

- *Type:* string

---

##### `HttpsTriggerUrl`<sup>Required</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```csharp
public string HttpsTriggerUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings"></a>

```csharp
public string IngressSettings { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `SourceArchiveBucket`<sup>Required</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```csharp
public string SourceArchiveBucket { get; }
```

- *Type:* string

---

##### `SourceArchiveObject`<sup>Required</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```csharp
public string SourceArchiveObject { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `TriggerHttp`<sup>Required</sup> <a name="TriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp"></a>

```csharp
public object TriggerHttp { get; }
```

- *Type:* object

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector"></a>

```csharp
public string VpcConnector { get; }
```

- *Type:* string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```csharp
public string VpcConnectorEgressSettings { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudfunctionsFunctionConfig <a name="GoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Runtime,
    double AvailableMemoryMb = null,
    System.Collections.Generic.IDictionary<string, string> BuildEnvironmentVariables = null,
    string BuildServiceAccount = null,
    string BuildWorkerPool = null,
    string Description = null,
    string DockerRegistry = null,
    string DockerRepository = null,
    string EntryPoint = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    GoogleCloudfunctionsFunctionEventTrigger EventTrigger = null,
    string HttpsTriggerSecurityLevel = null,
    string HttpsTriggerUrl = null,
    string Id = null,
    string IngressSettings = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MaxInstances = null,
    double MinInstances = null,
    string Project = null,
    string Region = null,
    object SecretEnvironmentVariables = null,
    object SecretVolumes = null,
    string ServiceAccountEmail = null,
    string SourceArchiveBucket = null,
    string SourceArchiveObject = null,
    GoogleCloudfunctionsFunctionSourceRepository SourceRepository = null,
    double Timeout = null,
    GoogleCloudfunctionsFunctionTimeouts Timeouts = null,
    object TriggerHttp = null,
    string VpcConnector = null,
    string VpcConnectorEgressSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime">Runtime</a></code> | <code>string</code> | The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb">AvailableMemoryMb</a></code> | <code>double</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables">BuildEnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount">BuildServiceAccount</a></code> | <code>string</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool">BuildWorkerPool</a></code> | <code>string</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description">Description</a></code> | <code>string</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry">DockerRegistry</a></code> | <code>string</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository">DockerRepository</a></code> | <code>string</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint">EntryPoint</a></code> | <code>string</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel">HttpsTriggerSecurityLevel</a></code> | <code>string</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl">HttpsTriggerUrl</a></code> | <code>string</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings">IngressSettings</a></code> | <code>string</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances">MaxInstances</a></code> | <code>double</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances">MinInstances</a></code> | <code>double</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project">Project</a></code> | <code>string</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region">Region</a></code> | <code>string</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code>object</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes">SecretVolumes</a></code> | <code>object</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket">SourceArchiveBucket</a></code> | <code>string</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject">SourceArchiveObject</a></code> | <code>string</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository">SourceRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout">Timeout</a></code> | <code>double</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp">TriggerHttp</a></code> | <code>object</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector">VpcConnector</a></code> | <code>string</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>string</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#name GoogleCloudfunctionsFunction#name}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#runtime GoogleCloudfunctionsFunction#runtime}

---

##### `AvailableMemoryMb`<sup>Optional</sup> <a name="AvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb"></a>

```csharp
public double AvailableMemoryMb { get; set; }
```

- *Type:* double

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#available_memory_mb GoogleCloudfunctionsFunction#available_memory_mb}

---

##### `BuildEnvironmentVariables`<sup>Optional</sup> <a name="BuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildEnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#build_environment_variables GoogleCloudfunctionsFunction#build_environment_variables}

---

##### `BuildServiceAccount`<sup>Optional</sup> <a name="BuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount"></a>

```csharp
public string BuildServiceAccount { get; set; }
```

- *Type:* string

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#build_service_account GoogleCloudfunctionsFunction#build_service_account}

---

##### `BuildWorkerPool`<sup>Optional</sup> <a name="BuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool"></a>

```csharp
public string BuildWorkerPool { get; set; }
```

- *Type:* string

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#build_worker_pool GoogleCloudfunctionsFunction#build_worker_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#description GoogleCloudfunctionsFunction#description}

---

##### `DockerRegistry`<sup>Optional</sup> <a name="DockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry"></a>

```csharp
public string DockerRegistry { get; set; }
```

- *Type:* string

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#docker_registry GoogleCloudfunctionsFunction#docker_registry}

---

##### `DockerRepository`<sup>Optional</sup> <a name="DockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository"></a>

```csharp
public string DockerRepository { get; set; }
```

- *Type:* string

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#docker_repository GoogleCloudfunctionsFunction#docker_repository}

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint"></a>

```csharp
public string EntryPoint { get; set; }
```

- *Type:* string

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#entry_point GoogleCloudfunctionsFunction#entry_point}

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#environment_variables GoogleCloudfunctionsFunction#environment_variables}

---

##### `EventTrigger`<sup>Optional</sup> <a name="EventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTrigger EventTrigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#event_trigger GoogleCloudfunctionsFunction#event_trigger}

---

##### `HttpsTriggerSecurityLevel`<sup>Optional</sup> <a name="HttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel"></a>

```csharp
public string HttpsTriggerSecurityLevel { get; set; }
```

- *Type:* string

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#https_trigger_security_level GoogleCloudfunctionsFunction#https_trigger_security_level}

---

##### `HttpsTriggerUrl`<sup>Optional</sup> <a name="HttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl"></a>

```csharp
public string HttpsTriggerUrl { get; set; }
```

- *Type:* string

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#https_trigger_url GoogleCloudfunctionsFunction#https_trigger_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressSettings`<sup>Optional</sup> <a name="IngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings"></a>

```csharp
public string IngressSettings { get; set; }
```

- *Type:* string

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#ingress_settings GoogleCloudfunctionsFunction#ingress_settings}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#kms_key_name GoogleCloudfunctionsFunction#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#labels GoogleCloudfunctionsFunction#labels}

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#max_instances GoogleCloudfunctionsFunction#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances"></a>

```csharp
public double MinInstances { get; set; }
```

- *Type:* double

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#min_instances GoogleCloudfunctionsFunction#min_instances}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#project GoogleCloudfunctionsFunction#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#region GoogleCloudfunctionsFunction#region}

---

##### `SecretEnvironmentVariables`<sup>Optional</sup> <a name="SecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables"></a>

```csharp
public object SecretEnvironmentVariables { get; set; }
```

- *Type:* object

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#secret_environment_variables GoogleCloudfunctionsFunction#secret_environment_variables}

---

##### `SecretVolumes`<sup>Optional</sup> <a name="SecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes"></a>

```csharp
public object SecretVolumes { get; set; }
```

- *Type:* object

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#secret_volumes GoogleCloudfunctionsFunction#secret_volumes}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#service_account_email GoogleCloudfunctionsFunction#service_account_email}

---

##### `SourceArchiveBucket`<sup>Optional</sup> <a name="SourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket"></a>

```csharp
public string SourceArchiveBucket { get; set; }
```

- *Type:* string

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#source_archive_bucket GoogleCloudfunctionsFunction#source_archive_bucket}

---

##### `SourceArchiveObject`<sup>Optional</sup> <a name="SourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject"></a>

```csharp
public string SourceArchiveObject { get; set; }
```

- *Type:* string

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#source_archive_object GoogleCloudfunctionsFunction#source_archive_object}

---

##### `SourceRepository`<sup>Optional</sup> <a name="SourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository"></a>

```csharp
public GoogleCloudfunctionsFunctionSourceRepository SourceRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#source_repository GoogleCloudfunctionsFunction#source_repository}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#timeout GoogleCloudfunctionsFunction#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts"></a>

```csharp
public GoogleCloudfunctionsFunctionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#timeouts GoogleCloudfunctionsFunction#timeouts}

---

##### `TriggerHttp`<sup>Optional</sup> <a name="TriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp"></a>

```csharp
public object TriggerHttp { get; set; }
```

- *Type:* object

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#trigger_http GoogleCloudfunctionsFunction#trigger_http}

---

##### `VpcConnector`<sup>Optional</sup> <a name="VpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector"></a>

```csharp
public string VpcConnector { get; set; }
```

- *Type:* string

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#vpc_connector GoogleCloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `VpcConnectorEgressSettings`<sup>Optional</sup> <a name="VpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings"></a>

```csharp
public string VpcConnectorEgressSettings { get; set; }
```

- *Type:* string

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#vpc_connector_egress_settings GoogleCloudfunctionsFunction#vpc_connector_egress_settings}

---

### GoogleCloudfunctionsFunctionEventTrigger <a name="GoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionEventTrigger {
    string EventType,
    string Resource,
    GoogleCloudfunctionsFunctionEventTriggerFailurePolicy FailurePolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType">EventType</a></code> | <code>string</code> | The type of event to observe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource">Resource</a></code> | <code>string</code> | The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | failure_policy block. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#event_type GoogleCloudfunctionsFunction#event_type}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#resource GoogleCloudfunctionsFunction#resource}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTriggerFailurePolicy FailurePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#failure_policy GoogleCloudfunctionsFunction#failure_policy}

---

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionEventTriggerFailurePolicy {
    object Retry
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry">Retry</a></code> | <code>object</code> | Whether the function should be retried on failure. Defaults to false. |

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry"></a>

```csharp
public object Retry { get; set; }
```

- *Type:* object

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#retry GoogleCloudfunctionsFunction#retry}

---

### GoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretEnvironmentVariables {
    string Key,
    string Secret,
    string Version,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key">Key</a></code> | <code>string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret">Secret</a></code> | <code>string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version">Version</a></code> | <code>string</code> | Version of the secret (version number or the string "latest"). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId">ProjectId</a></code> | <code>string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#key GoogleCloudfunctionsFunction#key}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the secret (version number or the string "latest").

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

### GoogleCloudfunctionsFunctionSecretVolumes <a name="GoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretVolumes {
    string MountPath,
    string Secret,
    string ProjectId = null,
    object Versions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath">MountPath</a></code> | <code>string</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret">Secret</a></code> | <code>string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId">ProjectId</a></code> | <code>string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions">Versions</a></code> | <code>object</code> | versions block. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

The path within the container to mount the secret volume.

For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#mount_path GoogleCloudfunctionsFunction#mount_path}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions"></a>

```csharp
public object Versions { get; set; }
```

- *Type:* object

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#versions GoogleCloudfunctionsFunction#versions}

---

### GoogleCloudfunctionsFunctionSecretVolumesVersions <a name="GoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretVolumesVersions {
    string Path,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path">Path</a></code> | <code>string</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version">Version</a></code> | <code>string</code> | Version of the secret (version number or the string "latest"). |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#path GoogleCloudfunctionsFunction#path}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the secret (version number or the string "latest").

It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

### GoogleCloudfunctionsFunctionSourceRepository <a name="GoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSourceRepository {
    string Url
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url">Url</a></code> | <code>string</code> | The URL pointing to the hosted repository where the function is defined. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#url GoogleCloudfunctionsFunction#url}

---

### GoogleCloudfunctionsFunctionTimeouts <a name="GoogleCloudfunctionsFunctionTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput">RetryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">Retry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput"></a>

```csharp
public object RetryInput { get; }
```

- *Type:* object

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```csharp
public object Retry { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTriggerFailurePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### GoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionEventTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy">PutFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailurePolicy` <a name="PutFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy"></a>

```csharp
private void PutFailurePolicy(GoogleCloudfunctionsFunctionEventTriggerFailurePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy"></a>

```csharp
private void ResetFailurePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference FailurePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a>

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTriggerFailurePolicy FailurePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudfunctionsFunctionEventTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```csharp
private GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudfunctionsFunctionSecretVolumesList <a name="GoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```csharp
private GoogleCloudfunctionsFunctionSecretVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions">PutVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersions` <a name="PutVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions"></a>

```csharp
private void PutVersions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* object

---

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetVersions` <a name="ResetVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions"></a>

```csharp
private void ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput">VersionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```csharp
public GoogleCloudfunctionsFunctionSecretVolumesVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput"></a>

```csharp
public object VersionsInput { get; }
```

- *Type:* object

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretVolumesVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```csharp
private GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="GoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionSourceRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">DeployedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeployedUrl`<sup>Required</sup> <a name="DeployedUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```csharp
public string DeployedUrl { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudfunctionsFunctionSourceRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---


### GoogleCloudfunctionsFunctionTimeoutsOutputReference <a name="GoogleCloudfunctionsFunctionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCloudfunctionsFunctionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



