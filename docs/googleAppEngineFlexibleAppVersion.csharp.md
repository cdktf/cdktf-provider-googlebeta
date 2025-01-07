# `googleAppEngineFlexibleAppVersion` Submodule <a name="`googleAppEngineFlexibleAppVersion` Submodule" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineFlexibleAppVersion <a name="GoogleAppEngineFlexibleAppVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version google_app_engine_flexible_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersion(Construct Scope, string Id, GoogleAppEngineFlexibleAppVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig">GoogleAppEngineFlexibleAppVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig">GoogleAppEngineFlexibleAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig">PutApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling">PutAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService">PutEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint">PutEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings">PutFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers">PutHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck">PutLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling">PutManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck">PutReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector">PutVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetApiConfig">ResetApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetAutomaticScaling">ResetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetBetaSettings">ResetBetaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDefaultExpiration">ResetDefaultExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy">ResetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEndpointsApiService">ResetEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetFlexibleRuntimeSettings">ResetFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetHandlers">ResetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInboundServices">ResetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetManualScaling">ResetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNobuildFilesRegex">ResetNobuildFilesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNoopOnDestroy">ResetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeApiVersion">ResetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeChannel">ResetRuntimeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath">ResetRuntimeMainExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServingStatus">ResetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVpcAccessConnector">ResetVpcAccessConnector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiConfig` <a name="PutApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig"></a>

```csharp
private void PutApiConfig(GoogleAppEngineFlexibleAppVersionApiConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---

##### `PutAutomaticScaling` <a name="PutAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling"></a>

```csharp
private void PutAutomaticScaling(GoogleAppEngineFlexibleAppVersionAutomaticScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment"></a>

```csharp
private void PutDeployment(GoogleAppEngineFlexibleAppVersionDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---

##### `PutEndpointsApiService` <a name="PutEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService"></a>

```csharp
private void PutEndpointsApiService(GoogleAppEngineFlexibleAppVersionEndpointsApiService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `PutEntrypoint` <a name="PutEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint"></a>

```csharp
private void PutEntrypoint(GoogleAppEngineFlexibleAppVersionEntrypoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---

##### `PutFlexibleRuntimeSettings` <a name="PutFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings"></a>

```csharp
private void PutFlexibleRuntimeSettings(GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---

##### `PutHandlers` <a name="PutHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers"></a>

```csharp
private void PutHandlers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers.parameter.value"></a>

- *Type:* object

---

##### `PutLivenessCheck` <a name="PutLivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck"></a>

```csharp
private void PutLivenessCheck(GoogleAppEngineFlexibleAppVersionLivenessCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `PutManualScaling` <a name="PutManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling"></a>

```csharp
private void PutManualScaling(GoogleAppEngineFlexibleAppVersionManualScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork"></a>

```csharp
private void PutNetwork(GoogleAppEngineFlexibleAppVersionNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---

##### `PutReadinessCheck` <a name="PutReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck"></a>

```csharp
private void PutReadinessCheck(GoogleAppEngineFlexibleAppVersionReadinessCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources"></a>

```csharp
private void PutResources(GoogleAppEngineFlexibleAppVersionResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAppEngineFlexibleAppVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

---

##### `PutVpcAccessConnector` <a name="PutVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector"></a>

```csharp
private void PutVpcAccessConnector(GoogleAppEngineFlexibleAppVersionVpcAccessConnector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `ResetApiConfig` <a name="ResetApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetApiConfig"></a>

```csharp
private void ResetApiConfig()
```

##### `ResetAutomaticScaling` <a name="ResetAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetAutomaticScaling"></a>

```csharp
private void ResetAutomaticScaling()
```

##### `ResetBetaSettings` <a name="ResetBetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetBetaSettings"></a>

```csharp
private void ResetBetaSettings()
```

##### `ResetDefaultExpiration` <a name="ResetDefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDefaultExpiration"></a>

```csharp
private void ResetDefaultExpiration()
```

##### `ResetDeleteServiceOnDestroy` <a name="ResetDeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy"></a>

```csharp
private void ResetDeleteServiceOnDestroy()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeployment"></a>

```csharp
private void ResetDeployment()
```

##### `ResetEndpointsApiService` <a name="ResetEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEndpointsApiService"></a>

```csharp
private void ResetEndpointsApiService()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEnvVariables"></a>

```csharp
private void ResetEnvVariables()
```

##### `ResetFlexibleRuntimeSettings` <a name="ResetFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetFlexibleRuntimeSettings"></a>

```csharp
private void ResetFlexibleRuntimeSettings()
```

##### `ResetHandlers` <a name="ResetHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetHandlers"></a>

```csharp
private void ResetHandlers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInboundServices` <a name="ResetInboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInboundServices"></a>

```csharp
private void ResetInboundServices()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetManualScaling` <a name="ResetManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetManualScaling"></a>

```csharp
private void ResetManualScaling()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNobuildFilesRegex` <a name="ResetNobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNobuildFilesRegex"></a>

```csharp
private void ResetNobuildFilesRegex()
```

##### `ResetNoopOnDestroy` <a name="ResetNoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNoopOnDestroy"></a>

```csharp
private void ResetNoopOnDestroy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetRuntimeApiVersion` <a name="ResetRuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeApiVersion"></a>

```csharp
private void ResetRuntimeApiVersion()
```

##### `ResetRuntimeChannel` <a name="ResetRuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeChannel"></a>

```csharp
private void ResetRuntimeChannel()
```

##### `ResetRuntimeMainExecutablePath` <a name="ResetRuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath"></a>

```csharp
private void ResetRuntimeMainExecutablePath()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetServingStatus` <a name="ResetServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServingStatus"></a>

```csharp
private void ResetServingStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

##### `ResetVpcAccessConnector` <a name="ResetVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVpcAccessConnector"></a>

```csharp
private void ResetVpcAccessConnector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineFlexibleAppVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineFlexibleAppVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineFlexibleAppVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineFlexibleAppVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineFlexibleAppVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineFlexibleAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineFlexibleAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfig">ApiConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference">GoogleAppEngineFlexibleAppVersionApiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiService">EndpointsApiService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference">GoogleAppEngineFlexibleAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettings">FlexibleRuntimeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlers">Handlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList">GoogleAppEngineFlexibleAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheck">LivenessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference">GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference">GoogleAppEngineFlexibleAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference">GoogleAppEngineFlexibleAppVersionNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheck">ReadinessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference">GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference">GoogleAppEngineFlexibleAppVersionResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference">GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfigInput">ApiConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScalingInput">AutomaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettingsInput">BetaSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpirationInput">DefaultExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput">DeleteServiceOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiServiceInput">EndpointsApiServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypointInput">EntrypointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariablesInput">EnvVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettingsInput">FlexibleRuntimeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlersInput">HandlersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServicesInput">InboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheckInput">LivenessCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScalingInput">ManualScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegexInput">NobuildFilesRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroyInput">NoopOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheckInput">ReadinessCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersionInput">RuntimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannelInput">RuntimeChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput">RuntimeMainExecutablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatusInput">ServingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnectorInput">VpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettings">BetaSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpiration">DefaultExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariables">EnvVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServices">InboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegex">NobuildFilesRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannel">RuntimeChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePath">RuntimeMainExecutablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatus">ServingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfig"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionApiConfigOutputReference ApiConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference">GoogleAppEngineFlexibleAppVersionApiConfigOutputReference</a>

---

##### `AutomaticScaling`<sup>Required</sup> <a name="AutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScaling"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference AutomaticScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deployment"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentOutputReference</a>

---

##### `EndpointsApiService`<sup>Required</sup> <a name="EndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiService"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference EndpointsApiService { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a>

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypoint"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEntrypointOutputReference Entrypoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference">GoogleAppEngineFlexibleAppVersionEntrypointOutputReference</a>

---

##### `FlexibleRuntimeSettings`<sup>Required</sup> <a name="FlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettings"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference FlexibleRuntimeSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference</a>

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlers"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersList Handlers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList">GoogleAppEngineFlexibleAppVersionHandlersList</a>

---

##### `LivenessCheck`<sup>Required</sup> <a name="LivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheck"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference LivenessCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference">GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference</a>

---

##### `ManualScaling`<sup>Required</sup> <a name="ManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScaling"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionManualScalingOutputReference ManualScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference">GoogleAppEngineFlexibleAppVersionManualScalingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.network"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference">GoogleAppEngineFlexibleAppVersionNetworkOutputReference</a>

---

##### `ReadinessCheck`<sup>Required</sup> <a name="ReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheck"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference ReadinessCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference">GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resources"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference">GoogleAppEngineFlexibleAppVersionResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeouts"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference">GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference</a>

---

##### `VpcAccessConnector`<sup>Required</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnector"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference VpcAccessConnector { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a>

---

##### `ApiConfigInput`<sup>Optional</sup> <a name="ApiConfigInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfigInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionApiConfig ApiConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---

##### `AutomaticScalingInput`<sup>Optional</sup> <a name="AutomaticScalingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScalingInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScaling AutomaticScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `BetaSettingsInput`<sup>Optional</sup> <a name="BetaSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BetaSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultExpirationInput`<sup>Optional</sup> <a name="DefaultExpirationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpirationInput"></a>

```csharp
public string DefaultExpirationInput { get; }
```

- *Type:* string

---

##### `DeleteServiceOnDestroyInput`<sup>Optional</sup> <a name="DeleteServiceOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput"></a>

```csharp
public object DeleteServiceOnDestroyInput { get; }
```

- *Type:* object

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deploymentInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeployment DeploymentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---

##### `EndpointsApiServiceInput`<sup>Optional</sup> <a name="EndpointsApiServiceInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiServiceInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEndpointsApiService EndpointsApiServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypointInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEntrypoint EntrypointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FlexibleRuntimeSettingsInput`<sup>Optional</sup> <a name="FlexibleRuntimeSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettingsInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings FlexibleRuntimeSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---

##### `HandlersInput`<sup>Optional</sup> <a name="HandlersInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlersInput"></a>

```csharp
public object HandlersInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundServicesInput`<sup>Optional</sup> <a name="InboundServicesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServicesInput"></a>

```csharp
public string[] InboundServicesInput { get; }
```

- *Type:* string[]

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LivenessCheckInput`<sup>Optional</sup> <a name="LivenessCheckInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheckInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionLivenessCheck LivenessCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `ManualScalingInput`<sup>Optional</sup> <a name="ManualScalingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScalingInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionManualScaling ManualScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.networkInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---

##### `NobuildFilesRegexInput`<sup>Optional</sup> <a name="NobuildFilesRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegexInput"></a>

```csharp
public string NobuildFilesRegexInput { get; }
```

- *Type:* string

---

##### `NoopOnDestroyInput`<sup>Optional</sup> <a name="NoopOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroyInput"></a>

```csharp
public object NoopOnDestroyInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReadinessCheckInput`<sup>Optional</sup> <a name="ReadinessCheckInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheckInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionReadinessCheck ReadinessCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resourcesInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---

##### `RuntimeApiVersionInput`<sup>Optional</sup> <a name="RuntimeApiVersionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersionInput"></a>

```csharp
public string RuntimeApiVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeChannelInput`<sup>Optional</sup> <a name="RuntimeChannelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannelInput"></a>

```csharp
public string RuntimeChannelInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `RuntimeMainExecutablePathInput`<sup>Optional</sup> <a name="RuntimeMainExecutablePathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput"></a>

```csharp
public string RuntimeMainExecutablePathInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServingStatusInput`<sup>Optional</sup> <a name="ServingStatusInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatusInput"></a>

```csharp
public string ServingStatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `VpcAccessConnectorInput`<sup>Optional</sup> <a name="VpcAccessConnectorInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnectorInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionVpcAccessConnector VpcAccessConnectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `BetaSettings`<sup>Required</sup> <a name="BetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BetaSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultExpiration`<sup>Required</sup> <a name="DefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpiration"></a>

```csharp
public string DefaultExpiration { get; }
```

- *Type:* string

---

##### `DeleteServiceOnDestroy`<sup>Required</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroy"></a>

```csharp
public object DeleteServiceOnDestroy { get; }
```

- *Type:* object

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InboundServices`<sup>Required</sup> <a name="InboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServices"></a>

```csharp
public string[] InboundServices { get; }
```

- *Type:* string[]

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `NobuildFilesRegex`<sup>Required</sup> <a name="NobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegex"></a>

```csharp
public string NobuildFilesRegex { get; }
```

- *Type:* string

---

##### `NoopOnDestroy`<sup>Required</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroy"></a>

```csharp
public object NoopOnDestroy { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `RuntimeApiVersion`<sup>Required</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersion"></a>

```csharp
public string RuntimeApiVersion { get; }
```

- *Type:* string

---

##### `RuntimeChannel`<sup>Required</sup> <a name="RuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannel"></a>

```csharp
public string RuntimeChannel { get; }
```

- *Type:* string

---

##### `RuntimeMainExecutablePath`<sup>Required</sup> <a name="RuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePath"></a>

```csharp
public string RuntimeMainExecutablePath { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServingStatus`<sup>Required</sup> <a name="ServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatus"></a>

```csharp
public string ServingStatus { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineFlexibleAppVersionApiConfig <a name="GoogleAppEngineFlexibleAppVersionApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionApiConfig {
    string Script,
    string AuthFailAction = null,
    string Login = null,
    string SecurityLevel = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.script">Script</a></code> | <code>string</code> | Path to the script from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.login">Login</a></code> | <code>string</code> | Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.url">Url</a></code> | <code>string</code> | URL to serve the endpoint at. |

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#script GoogleAppEngineFlexibleAppVersion#script}

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; set; }
```

- *Type:* string

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#auth_fail_action GoogleAppEngineFlexibleAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#login GoogleAppEngineFlexibleAppVersion#login}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#security_level GoogleAppEngineFlexibleAppVersion#security_level}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#url GoogleAppEngineFlexibleAppVersion#url}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScaling <a name="GoogleAppEngineFlexibleAppVersionAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScaling {
    GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization CpuUtilization,
    string CoolDownPeriod = null,
    GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization DiskUtilization = null,
    double MaxConcurrentRequests = null,
    double MaxIdleInstances = null,
    string MaxPendingLatency = null,
    double MaxTotalInstances = null,
    double MinIdleInstances = null,
    string MinPendingLatency = null,
    double MinTotalInstances = null,
    GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization NetworkUtilization = null,
    GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization RequestUtilization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>string</code> | The time period that the Autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization">DiskUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | disk_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>double</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances">MaxTotalInstances</a></code> | <code>double</code> | Maximum number of instances that should be started to handle requests for this version. Default: 20. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency">MinPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances">MinTotalInstances</a></code> | <code>double</code> | Minimum number of running instances that should be maintained for this version. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization">NetworkUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | network_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization">RequestUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | request_utilization block. |

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization CpuUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#cpu_utilization GoogleAppEngineFlexibleAppVersion#cpu_utilization}

---

##### `CoolDownPeriod`<sup>Optional</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod"></a>

```csharp
public string CoolDownPeriod { get; set; }
```

- *Type:* string

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#cool_down_period GoogleAppEngineFlexibleAppVersion#cool_down_period}

---

##### `DiskUtilization`<sup>Optional</sup> <a name="DiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization DiskUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#disk_utilization GoogleAppEngineFlexibleAppVersion#disk_utilization}

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; set; }
```

- *Type:* double

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#max_concurrent_requests GoogleAppEngineFlexibleAppVersion#max_concurrent_requests}

---

##### `MaxIdleInstances`<sup>Optional</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```csharp
public double MaxIdleInstances { get; set; }
```

- *Type:* double

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#max_idle_instances GoogleAppEngineFlexibleAppVersion#max_idle_instances}

---

##### `MaxPendingLatency`<sup>Optional</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```csharp
public string MaxPendingLatency { get; set; }
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#max_pending_latency GoogleAppEngineFlexibleAppVersion#max_pending_latency}

---

##### `MaxTotalInstances`<sup>Optional</sup> <a name="MaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances"></a>

```csharp
public double MaxTotalInstances { get; set; }
```

- *Type:* double

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#max_total_instances GoogleAppEngineFlexibleAppVersion#max_total_instances}

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; set; }
```

- *Type:* double

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#min_idle_instances GoogleAppEngineFlexibleAppVersion#min_idle_instances}

---

##### `MinPendingLatency`<sup>Optional</sup> <a name="MinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency"></a>

```csharp
public string MinPendingLatency { get; set; }
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#min_pending_latency GoogleAppEngineFlexibleAppVersion#min_pending_latency}

---

##### `MinTotalInstances`<sup>Optional</sup> <a name="MinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances"></a>

```csharp
public double MinTotalInstances { get; set; }
```

- *Type:* double

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#min_total_instances GoogleAppEngineFlexibleAppVersion#min_total_instances}

---

##### `NetworkUtilization`<sup>Optional</sup> <a name="NetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization NetworkUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#network_utilization GoogleAppEngineFlexibleAppVersion#network_utilization}

---

##### `RequestUtilization`<sup>Optional</sup> <a name="RequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization RequestUtilization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#request_utilization GoogleAppEngineFlexibleAppVersion#request_utilization}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization {
    double TargetUtilization,
    string AggregationWindowLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization">TargetUtilization</a></code> | <code>double</code> | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength">AggregationWindowLength</a></code> | <code>string</code> | Period of time over which CPU utilization is calculated. |

---

##### `TargetUtilization`<sup>Required</sup> <a name="TargetUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization"></a>

```csharp
public double TargetUtilization { get; set; }
```

- *Type:* double

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_utilization GoogleAppEngineFlexibleAppVersion#target_utilization}

---

##### `AggregationWindowLength`<sup>Optional</sup> <a name="AggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength"></a>

```csharp
public string AggregationWindowLength { get; set; }
```

- *Type:* string

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#aggregation_window_length GoogleAppEngineFlexibleAppVersion#aggregation_window_length}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization {
    double TargetReadBytesPerSecond = null,
    double TargetReadOpsPerSecond = null,
    double TargetWriteBytesPerSecond = null,
    double TargetWriteOpsPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond">TargetReadBytesPerSecond</a></code> | <code>double</code> | Target bytes read per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond">TargetReadOpsPerSecond</a></code> | <code>double</code> | Target ops read per seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond">TargetWriteBytesPerSecond</a></code> | <code>double</code> | Target bytes written per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond">TargetWriteOpsPerSecond</a></code> | <code>double</code> | Target ops written per second. |

---

##### `TargetReadBytesPerSecond`<sup>Optional</sup> <a name="TargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond"></a>

```csharp
public double TargetReadBytesPerSecond { get; set; }
```

- *Type:* double

Target bytes read per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_read_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

##### `TargetReadOpsPerSecond`<sup>Optional</sup> <a name="TargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond"></a>

```csharp
public double TargetReadOpsPerSecond { get; set; }
```

- *Type:* double

Target ops read per seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_read_ops_per_second GoogleAppEngineFlexibleAppVersion#target_read_ops_per_second}

---

##### `TargetWriteBytesPerSecond`<sup>Optional</sup> <a name="TargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond"></a>

```csharp
public double TargetWriteBytesPerSecond { get; set; }
```

- *Type:* double

Target bytes written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_write_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

##### `TargetWriteOpsPerSecond`<sup>Optional</sup> <a name="TargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond"></a>

```csharp
public double TargetWriteOpsPerSecond { get; set; }
```

- *Type:* double

Target ops written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_write_ops_per_second GoogleAppEngineFlexibleAppVersion#target_write_ops_per_second}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization {
    double TargetReceivedBytesPerSecond = null,
    double TargetReceivedPacketsPerSecond = null,
    double TargetSentBytesPerSecond = null,
    double TargetSentPacketsPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond">TargetReceivedBytesPerSecond</a></code> | <code>double</code> | Target bytes received per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond">TargetReceivedPacketsPerSecond</a></code> | <code>double</code> | Target packets received per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond">TargetSentBytesPerSecond</a></code> | <code>double</code> | Target bytes sent per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond">TargetSentPacketsPerSecond</a></code> | <code>double</code> | Target packets sent per second. |

---

##### `TargetReceivedBytesPerSecond`<sup>Optional</sup> <a name="TargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond"></a>

```csharp
public double TargetReceivedBytesPerSecond { get; set; }
```

- *Type:* double

Target bytes received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_received_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

##### `TargetReceivedPacketsPerSecond`<sup>Optional</sup> <a name="TargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond"></a>

```csharp
public double TargetReceivedPacketsPerSecond { get; set; }
```

- *Type:* double

Target packets received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_received_packets_per_second GoogleAppEngineFlexibleAppVersion#target_received_packets_per_second}

---

##### `TargetSentBytesPerSecond`<sup>Optional</sup> <a name="TargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond"></a>

```csharp
public double TargetSentBytesPerSecond { get; set; }
```

- *Type:* double

Target bytes sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_sent_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

##### `TargetSentPacketsPerSecond`<sup>Optional</sup> <a name="TargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond"></a>

```csharp
public double TargetSentPacketsPerSecond { get; set; }
```

- *Type:* double

Target packets sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_sent_packets_per_second GoogleAppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization {
    double TargetConcurrentRequests = null,
    string TargetRequestCountPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests">TargetConcurrentRequests</a></code> | <code>double</code> | Target number of concurrent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond">TargetRequestCountPerSecond</a></code> | <code>string</code> | Target requests per second. |

---

##### `TargetConcurrentRequests`<sup>Optional</sup> <a name="TargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests"></a>

```csharp
public double TargetConcurrentRequests { get; set; }
```

- *Type:* double

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_concurrent_requests GoogleAppEngineFlexibleAppVersion#target_concurrent_requests}

---

##### `TargetRequestCountPerSecond`<sup>Optional</sup> <a name="TargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond"></a>

```csharp
public string TargetRequestCountPerSecond { get; set; }
```

- *Type:* string

Target requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#target_request_count_per_second GoogleAppEngineFlexibleAppVersion#target_request_count_per_second}

---

### GoogleAppEngineFlexibleAppVersionConfig <a name="GoogleAppEngineFlexibleAppVersionConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleAppEngineFlexibleAppVersionLivenessCheck LivenessCheck,
    GoogleAppEngineFlexibleAppVersionReadinessCheck ReadinessCheck,
    string Runtime,
    string Service,
    GoogleAppEngineFlexibleAppVersionApiConfig ApiConfig = null,
    GoogleAppEngineFlexibleAppVersionAutomaticScaling AutomaticScaling = null,
    System.Collections.Generic.IDictionary<string, string> BetaSettings = null,
    string DefaultExpiration = null,
    object DeleteServiceOnDestroy = null,
    GoogleAppEngineFlexibleAppVersionDeployment Deployment = null,
    GoogleAppEngineFlexibleAppVersionEndpointsApiService EndpointsApiService = null,
    GoogleAppEngineFlexibleAppVersionEntrypoint Entrypoint = null,
    System.Collections.Generic.IDictionary<string, string> EnvVariables = null,
    GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings FlexibleRuntimeSettings = null,
    object Handlers = null,
    string Id = null,
    string[] InboundServices = null,
    string InstanceClass = null,
    GoogleAppEngineFlexibleAppVersionManualScaling ManualScaling = null,
    GoogleAppEngineFlexibleAppVersionNetwork Network = null,
    string NobuildFilesRegex = null,
    object NoopOnDestroy = null,
    string Project = null,
    GoogleAppEngineFlexibleAppVersionResources Resources = null,
    string RuntimeApiVersion = null,
    string RuntimeChannel = null,
    string RuntimeMainExecutablePath = null,
    string ServiceAccount = null,
    string ServingStatus = null,
    GoogleAppEngineFlexibleAppVersionTimeouts Timeouts = null,
    string VersionId = null,
    GoogleAppEngineFlexibleAppVersionVpcAccessConnector VpcAccessConnector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.livenessCheck">LivenessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.readinessCheck">ReadinessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtime">Runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.service">Service</a></code> | <code>string</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.apiConfig">ApiConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.betaSettings">BetaSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.defaultExpiration">DefaultExpiration</a></code> | <code>string</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>object</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.endpointsApiService">EndpointsApiService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.envVariables">EnvVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.flexibleRuntimeSettings">FlexibleRuntimeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | flexible_runtime_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.handlers">Handlers</a></code> | <code>object</code> | handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#id GoogleAppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.inboundServices">InboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex">NobuildFilesRegex</a></code> | <code>string</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>object</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#project GoogleAppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeChannel">RuntimeChannel</a></code> | <code>string</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath">RuntimeMainExecutablePath</a></code> | <code>string</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.servingStatus">ServingStatus</a></code> | <code>string</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.versionId">VersionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LivenessCheck`<sup>Required</sup> <a name="LivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.livenessCheck"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionLivenessCheck LivenessCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#liveness_check GoogleAppEngineFlexibleAppVersion#liveness_check}

---

##### `ReadinessCheck`<sup>Required</sup> <a name="ReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.readinessCheck"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionReadinessCheck ReadinessCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#readiness_check GoogleAppEngineFlexibleAppVersion#readiness_check}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#runtime GoogleAppEngineFlexibleAppVersion#runtime}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#service GoogleAppEngineFlexibleAppVersion#service}

---

##### `ApiConfig`<sup>Optional</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.apiConfig"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionApiConfig ApiConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#api_config GoogleAppEngineFlexibleAppVersion#api_config}

---

##### `AutomaticScaling`<sup>Optional</sup> <a name="AutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.automaticScaling"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScaling AutomaticScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#automatic_scaling GoogleAppEngineFlexibleAppVersion#automatic_scaling}

---

##### `BetaSettings`<sup>Optional</sup> <a name="BetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.betaSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BetaSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#beta_settings GoogleAppEngineFlexibleAppVersion#beta_settings}

---

##### `DefaultExpiration`<sup>Optional</sup> <a name="DefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.defaultExpiration"></a>

```csharp
public string DefaultExpiration { get; set; }
```

- *Type:* string

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#default_expiration GoogleAppEngineFlexibleAppVersion#default_expiration}

---

##### `DeleteServiceOnDestroy`<sup>Optional</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy"></a>

```csharp
public object DeleteServiceOnDestroy { get; set; }
```

- *Type:* object

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#delete_service_on_destroy GoogleAppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deployment"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeployment Deployment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#deployment GoogleAppEngineFlexibleAppVersion#deployment}

---

##### `EndpointsApiService`<sup>Optional</sup> <a name="EndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.endpointsApiService"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEndpointsApiService EndpointsApiService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#endpoints_api_service GoogleAppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.entrypoint"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEntrypoint Entrypoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#entrypoint GoogleAppEngineFlexibleAppVersion#entrypoint}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.envVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#env_variables GoogleAppEngineFlexibleAppVersion#env_variables}

---

##### `FlexibleRuntimeSettings`<sup>Optional</sup> <a name="FlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.flexibleRuntimeSettings"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings FlexibleRuntimeSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

flexible_runtime_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#flexible_runtime_settings GoogleAppEngineFlexibleAppVersion#flexible_runtime_settings}

---

##### `Handlers`<sup>Optional</sup> <a name="Handlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.handlers"></a>

```csharp
public object Handlers { get; set; }
```

- *Type:* object

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#handlers GoogleAppEngineFlexibleAppVersion#handlers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#id GoogleAppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundServices`<sup>Optional</sup> <a name="InboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.inboundServices"></a>

```csharp
public string[] InboundServices { get; set; }
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#inbound_services GoogleAppEngineFlexibleAppVersion#inbound_services}

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#instance_class GoogleAppEngineFlexibleAppVersion#instance_class}

---

##### `ManualScaling`<sup>Optional</sup> <a name="ManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.manualScaling"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionManualScaling ManualScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#manual_scaling GoogleAppEngineFlexibleAppVersion#manual_scaling}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.network"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#network GoogleAppEngineFlexibleAppVersion#network}

---

##### `NobuildFilesRegex`<sup>Optional</sup> <a name="NobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex"></a>

```csharp
public string NobuildFilesRegex { get; set; }
```

- *Type:* string

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#nobuild_files_regex GoogleAppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `NoopOnDestroy`<sup>Optional</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.noopOnDestroy"></a>

```csharp
public object NoopOnDestroy { get; set; }
```

- *Type:* object

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#noop_on_destroy GoogleAppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#project GoogleAppEngineFlexibleAppVersion#project}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.resources"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionResources Resources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#resources GoogleAppEngineFlexibleAppVersion#resources}

---

##### `RuntimeApiVersion`<sup>Optional</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeApiVersion"></a>

```csharp
public string RuntimeApiVersion { get; set; }
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#runtime_api_version GoogleAppEngineFlexibleAppVersion#runtime_api_version}

---

##### `RuntimeChannel`<sup>Optional</sup> <a name="RuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeChannel"></a>

```csharp
public string RuntimeChannel { get; set; }
```

- *Type:* string

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#runtime_channel GoogleAppEngineFlexibleAppVersion#runtime_channel}

---

##### `RuntimeMainExecutablePath`<sup>Optional</sup> <a name="RuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath"></a>

```csharp
public string RuntimeMainExecutablePath { get; set; }
```

- *Type:* string

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#runtime_main_executable_path GoogleAppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#service_account GoogleAppEngineFlexibleAppVersion#service_account}

---

##### `ServingStatus`<sup>Optional</sup> <a name="ServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.servingStatus"></a>

```csharp
public string ServingStatus { get; set; }
```

- *Type:* string

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#serving_status GoogleAppEngineFlexibleAppVersion#serving_status}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.timeouts"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#timeouts GoogleAppEngineFlexibleAppVersion#timeouts}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#version_id GoogleAppEngineFlexibleAppVersion#version_id}

---

##### `VpcAccessConnector`<sup>Optional</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.vpcAccessConnector"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionVpcAccessConnector VpcAccessConnector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#vpc_access_connector GoogleAppEngineFlexibleAppVersion#vpc_access_connector}

---

### GoogleAppEngineFlexibleAppVersionDeployment <a name="GoogleAppEngineFlexibleAppVersionDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeployment {
    GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions CloudBuildOptions = null,
    GoogleAppEngineFlexibleAppVersionDeploymentContainer Container = null,
    object Files = null,
    GoogleAppEngineFlexibleAppVersionDeploymentZip Zip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions">CloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | cloud_build_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.files">Files</a></code> | <code>object</code> | files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | zip block. |

---

##### `CloudBuildOptions`<sup>Optional</sup> <a name="CloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions CloudBuildOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#cloud_build_options GoogleAppEngineFlexibleAppVersion#cloud_build_options}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.container"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentContainer Container { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#container GoogleAppEngineFlexibleAppVersion#container}

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.files"></a>

```csharp
public object Files { get; set; }
```

- *Type:* object

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#files GoogleAppEngineFlexibleAppVersion#files}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.zip"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentZip Zip { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#zip GoogleAppEngineFlexibleAppVersion#zip}

---

### GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions <a name="GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions {
    string AppYamlPath,
    string CloudBuildTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath">AppYamlPath</a></code> | <code>string</code> | Path to the yaml file used in deployment, used to determine runtime configuration details. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout">CloudBuildTimeout</a></code> | <code>string</code> | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. |

---

##### `AppYamlPath`<sup>Required</sup> <a name="AppYamlPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath"></a>

```csharp
public string AppYamlPath { get; set; }
```

- *Type:* string

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#app_yaml_path GoogleAppEngineFlexibleAppVersion#app_yaml_path}

---

##### `CloudBuildTimeout`<sup>Optional</sup> <a name="CloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout"></a>

```csharp
public string CloudBuildTimeout { get; set; }
```

- *Type:* string

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#cloud_build_timeout GoogleAppEngineFlexibleAppVersion#cloud_build_timeout}

---

### GoogleAppEngineFlexibleAppVersionDeploymentContainer <a name="GoogleAppEngineFlexibleAppVersionDeploymentContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentContainer {
    string Image
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.property.image">Image</a></code> | <code>string</code> | URI to the hosted container image in Google Container Registry. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#image GoogleAppEngineFlexibleAppVersion#image}

---

### GoogleAppEngineFlexibleAppVersionDeploymentFiles <a name="GoogleAppEngineFlexibleAppVersionDeploymentFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentFiles {
    string Name,
    string SourceUrl,
    string Sha1Sum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum">Sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}.

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#source_url GoogleAppEngineFlexibleAppVersion#source_url}

---

##### `Sha1Sum`<sup>Optional</sup> <a name="Sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum"></a>

```csharp
public string Sha1Sum { get; set; }
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#sha1_sum GoogleAppEngineFlexibleAppVersion#sha1_sum}

---

### GoogleAppEngineFlexibleAppVersionDeploymentZip <a name="GoogleAppEngineFlexibleAppVersionDeploymentZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentZip {
    string SourceUrl,
    double FilesCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.filesCount">FilesCount</a></code> | <code>double</code> | files count. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#source_url GoogleAppEngineFlexibleAppVersion#source_url}

---

##### `FilesCount`<sup>Optional</sup> <a name="FilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.filesCount"></a>

```csharp
public double FilesCount { get; set; }
```

- *Type:* double

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#files_count GoogleAppEngineFlexibleAppVersion#files_count}

---

### GoogleAppEngineFlexibleAppVersionEndpointsApiService <a name="GoogleAppEngineFlexibleAppVersionEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionEndpointsApiService {
    string Name,
    string ConfigId = null,
    object DisableTraceSampling = null,
    string RolloutStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.name">Name</a></code> | <code>string</code> | Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.configId">ConfigId</a></code> | <code>string</code> | Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling">DisableTraceSampling</a></code> | <code>object</code> | Enable or disable trace sampling. By default, this is set to false for enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy">RolloutStrategy</a></code> | <code>string</code> | Endpoints rollout strategy. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#config_id GoogleAppEngineFlexibleAppVersion#config_id}

---

##### `DisableTraceSampling`<sup>Optional</sup> <a name="DisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling"></a>

```csharp
public object DisableTraceSampling { get; set; }
```

- *Type:* object

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#disable_trace_sampling GoogleAppEngineFlexibleAppVersion#disable_trace_sampling}

---

##### `RolloutStrategy`<sup>Optional</sup> <a name="RolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy"></a>

```csharp
public string RolloutStrategy { get; set; }
```

- *Type:* string

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#rollout_strategy GoogleAppEngineFlexibleAppVersion#rollout_strategy}

---

### GoogleAppEngineFlexibleAppVersionEntrypoint <a name="GoogleAppEngineFlexibleAppVersionEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionEntrypoint {
    string Shell
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.property.shell">Shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.property.shell"></a>

```csharp
public string Shell { get; set; }
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#shell GoogleAppEngineFlexibleAppVersion#shell}

---

### GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings <a name="GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings {
    string OperatingSystem = null,
    string RuntimeVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Operating System of the application runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | The runtime version of an App Engine flexible application. |

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Operating System of the application runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#operating_system GoogleAppEngineFlexibleAppVersion#operating_system}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

The runtime version of an App Engine flexible application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#runtime_version GoogleAppEngineFlexibleAppVersion#runtime_version}

---

### GoogleAppEngineFlexibleAppVersionHandlers <a name="GoogleAppEngineFlexibleAppVersionHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlers {
    string AuthFailAction = null,
    string Login = null,
    string RedirectHttpResponseCode = null,
    GoogleAppEngineFlexibleAppVersionHandlersScript Script = null,
    string SecurityLevel = null,
    GoogleAppEngineFlexibleAppVersionHandlersStaticFiles StaticFiles = null,
    string UrlRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.login">Login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.urlRegex">UrlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; set; }
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#auth_fail_action GoogleAppEngineFlexibleAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#login GoogleAppEngineFlexibleAppVersion#login}

---

##### `RedirectHttpResponseCode`<sup>Optional</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode"></a>

```csharp
public string RedirectHttpResponseCode { get; set; }
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#redirect_http_response_code GoogleAppEngineFlexibleAppVersion#redirect_http_response_code}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.script"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersScript Script { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#script GoogleAppEngineFlexibleAppVersion#script}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#security_level GoogleAppEngineFlexibleAppVersion#security_level}

---

##### `StaticFiles`<sup>Optional</sup> <a name="StaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.staticFiles"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersStaticFiles StaticFiles { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#static_files GoogleAppEngineFlexibleAppVersion#static_files}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.urlRegex"></a>

```csharp
public string UrlRegex { get; set; }
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#url_regex GoogleAppEngineFlexibleAppVersion#url_regex}

---

### GoogleAppEngineFlexibleAppVersionHandlersScript <a name="GoogleAppEngineFlexibleAppVersionHandlersScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlersScript {
    string ScriptPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#script_path GoogleAppEngineFlexibleAppVersion#script_path}

---

### GoogleAppEngineFlexibleAppVersionHandlersStaticFiles <a name="GoogleAppEngineFlexibleAppVersionHandlersStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlersStaticFiles {
    object ApplicationReadable = null,
    string Expiration = null,
    System.Collections.Generic.IDictionary<string, string> HttpHeaders = null,
    string MimeType = null,
    string Path = null,
    object RequireMatchingFile = null,
    string UploadPathRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable">ApplicationReadable</a></code> | <code>object</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration">Expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType">MimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.path">Path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>object</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex">UploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `ApplicationReadable`<sup>Optional</sup> <a name="ApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```csharp
public object ApplicationReadable { get; set; }
```

- *Type:* object

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#application_readable GoogleAppEngineFlexibleAppVersion#application_readable}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#expiration GoogleAppEngineFlexibleAppVersion#expiration}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#http_headers GoogleAppEngineFlexibleAppVersion#http_headers}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#mime_type GoogleAppEngineFlexibleAppVersion#mime_type}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `RequireMatchingFile`<sup>Optional</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```csharp
public object RequireMatchingFile { get; set; }
```

- *Type:* object

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#require_matching_file GoogleAppEngineFlexibleAppVersion#require_matching_file}

---

##### `UploadPathRegex`<sup>Optional</sup> <a name="UploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```csharp
public string UploadPathRegex { get; set; }
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#upload_path_regex GoogleAppEngineFlexibleAppVersion#upload_path_regex}

---

### GoogleAppEngineFlexibleAppVersionLivenessCheck <a name="GoogleAppEngineFlexibleAppVersionLivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionLivenessCheck {
    string Path,
    string CheckInterval = null,
    double FailureThreshold = null,
    string Host = null,
    string InitialDelay = null,
    double SuccessThreshold = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.path">Path</a></code> | <code>string</code> | The request path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.checkInterval">CheckInterval</a></code> | <code>string</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.host">Host</a></code> | <code>string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.initialDelay">InitialDelay</a></code> | <code>string</code> | The initial delay before starting to execute the checks. Default: "300s". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | Number of consecutive successful checks required before considering the VM healthy. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.timeout">Timeout</a></code> | <code>string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.checkInterval"></a>

```csharp
public string CheckInterval { get; set; }
```

- *Type:* string

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#check_interval GoogleAppEngineFlexibleAppVersion#check_interval}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#failure_threshold GoogleAppEngineFlexibleAppVersion#failure_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#host GoogleAppEngineFlexibleAppVersion#host}

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.initialDelay"></a>

```csharp
public string InitialDelay { get; set; }
```

- *Type:* string

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#initial_delay GoogleAppEngineFlexibleAppVersion#initial_delay}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; set; }
```

- *Type:* double

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#success_threshold GoogleAppEngineFlexibleAppVersion#success_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#timeout GoogleAppEngineFlexibleAppVersion#timeout}

---

### GoogleAppEngineFlexibleAppVersionManualScaling <a name="GoogleAppEngineFlexibleAppVersionManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionManualScaling {
    double Instances
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.property.instances">Instances</a></code> | <code>double</code> | Number of instances to assign to the service at the start. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.property.instances"></a>

```csharp
public double Instances { get; set; }
```

- *Type:* double

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#instances GoogleAppEngineFlexibleAppVersion#instances}

---

### GoogleAppEngineFlexibleAppVersionNetwork <a name="GoogleAppEngineFlexibleAppVersionNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionNetwork {
    string Name,
    string[] ForwardedPorts = null,
    string InstanceIpMode = null,
    string InstanceTag = null,
    object SessionAffinity = null,
    string Subnetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.name">Name</a></code> | <code>string</code> | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.forwardedPorts">ForwardedPorts</a></code> | <code>string[]</code> | List of ports, or port pairs, to forward from the virtual machine to the application container. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceIpMode">InstanceIpMode</a></code> | <code>string</code> | Prevent instances from receiving an ephemeral external IP address. Possible values: ["EXTERNAL", "INTERNAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceTag">InstanceTag</a></code> | <code>string</code> | Tag to apply to the instance during creation. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.sessionAffinity">SessionAffinity</a></code> | <code>object</code> | Enable session affinity. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.subnetwork">Subnetwork</a></code> | <code>string</code> | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `ForwardedPorts`<sup>Optional</sup> <a name="ForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.forwardedPorts"></a>

```csharp
public string[] ForwardedPorts { get; set; }
```

- *Type:* string[]

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#forwarded_ports GoogleAppEngineFlexibleAppVersion#forwarded_ports}

---

##### `InstanceIpMode`<sup>Optional</sup> <a name="InstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceIpMode"></a>

```csharp
public string InstanceIpMode { get; set; }
```

- *Type:* string

Prevent instances from receiving an ephemeral external IP address. Possible values: ["EXTERNAL", "INTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#instance_ip_mode GoogleAppEngineFlexibleAppVersion#instance_ip_mode}

---

##### `InstanceTag`<sup>Optional</sup> <a name="InstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceTag"></a>

```csharp
public string InstanceTag { get; set; }
```

- *Type:* string

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#instance_tag GoogleAppEngineFlexibleAppVersion#instance_tag}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.sessionAffinity"></a>

```csharp
public object SessionAffinity { get; set; }
```

- *Type:* object

Enable session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#session_affinity GoogleAppEngineFlexibleAppVersion#session_affinity}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#subnetwork GoogleAppEngineFlexibleAppVersion#subnetwork}

---

### GoogleAppEngineFlexibleAppVersionReadinessCheck <a name="GoogleAppEngineFlexibleAppVersionReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionReadinessCheck {
    string Path,
    string AppStartTimeout = null,
    string CheckInterval = null,
    double FailureThreshold = null,
    string Host = null,
    double SuccessThreshold = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.path">Path</a></code> | <code>string</code> | The request path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout">AppStartTimeout</a></code> | <code>string</code> | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.checkInterval">CheckInterval</a></code> | <code>string</code> | Interval between health checks.  Default: "5s". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Number of consecutive failed checks required before removing traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.host">Host</a></code> | <code>string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | Number of consecutive successful checks required before receiving traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.timeout">Timeout</a></code> | <code>string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `AppStartTimeout`<sup>Optional</sup> <a name="AppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout"></a>

```csharp
public string AppStartTimeout { get; set; }
```

- *Type:* string

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#app_start_timeout GoogleAppEngineFlexibleAppVersion#app_start_timeout}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.checkInterval"></a>

```csharp
public string CheckInterval { get; set; }
```

- *Type:* string

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#check_interval GoogleAppEngineFlexibleAppVersion#check_interval}

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#failure_threshold GoogleAppEngineFlexibleAppVersion#failure_threshold}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#host GoogleAppEngineFlexibleAppVersion#host}

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; set; }
```

- *Type:* double

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#success_threshold GoogleAppEngineFlexibleAppVersion#success_threshold}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#timeout GoogleAppEngineFlexibleAppVersion#timeout}

---

### GoogleAppEngineFlexibleAppVersionResources <a name="GoogleAppEngineFlexibleAppVersionResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionResources {
    double Cpu = null,
    double DiskGb = null,
    double MemoryGb = null,
    object Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.cpu">Cpu</a></code> | <code>double</code> | Number of CPU cores needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.diskGb">DiskGb</a></code> | <code>double</code> | Disk size (GB) needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.memoryGb">MemoryGb</a></code> | <code>double</code> | Memory (GB) needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.volumes">Volumes</a></code> | <code>object</code> | volumes block. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#cpu GoogleAppEngineFlexibleAppVersion#cpu}

---

##### `DiskGb`<sup>Optional</sup> <a name="DiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.diskGb"></a>

```csharp
public double DiskGb { get; set; }
```

- *Type:* double

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#disk_gb GoogleAppEngineFlexibleAppVersion#disk_gb}

---

##### `MemoryGb`<sup>Optional</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.memoryGb"></a>

```csharp
public double MemoryGb { get; set; }
```

- *Type:* double

Memory (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#memory_gb GoogleAppEngineFlexibleAppVersion#memory_gb}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.volumes"></a>

```csharp
public object Volumes { get; set; }
```

- *Type:* object

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#volumes GoogleAppEngineFlexibleAppVersion#volumes}

---

### GoogleAppEngineFlexibleAppVersionResourcesVolumes <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionResourcesVolumes {
    string Name,
    double SizeGb,
    string VolumeType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.name">Name</a></code> | <code>string</code> | Unique name for the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb">SizeGb</a></code> | <code>double</code> | Volume size in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.volumeType">VolumeType</a></code> | <code>string</code> | Underlying volume type, e.g. 'tmpfs'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb"></a>

```csharp
public double SizeGb { get; set; }
```

- *Type:* double

Volume size in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#size_gb GoogleAppEngineFlexibleAppVersion#size_gb}

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Underlying volume type, e.g. 'tmpfs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#volume_type GoogleAppEngineFlexibleAppVersion#volume_type}

---

### GoogleAppEngineFlexibleAppVersionTimeouts <a name="GoogleAppEngineFlexibleAppVersionTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#create GoogleAppEngineFlexibleAppVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#delete GoogleAppEngineFlexibleAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#update GoogleAppEngineFlexibleAppVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#create GoogleAppEngineFlexibleAppVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#delete GoogleAppEngineFlexibleAppVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#update GoogleAppEngineFlexibleAppVersion#update}.

---

### GoogleAppEngineFlexibleAppVersionVpcAccessConnector <a name="GoogleAppEngineFlexibleAppVersionVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionVpcAccessConnector {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.property.name">Name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineFlexibleAppVersionApiConfigOutputReference <a name="GoogleAppEngineFlexibleAppVersionApiConfigOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionApiConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction"></a>

```csharp
private void ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel"></a>

```csharp
private void ResetSecurityLevel()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput"></a>

```csharp
public string AuthFailActionInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionApiConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength">ResetAggregationWindowLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregationWindowLength` <a name="ResetAggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength"></a>

```csharp
private void ResetAggregationWindowLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput">AggregationWindowLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput">TargetUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength">AggregationWindowLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization">TargetUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationWindowLengthInput`<sup>Optional</sup> <a name="AggregationWindowLengthInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput"></a>

```csharp
public string AggregationWindowLengthInput { get; }
```

- *Type:* string

---

##### `TargetUtilizationInput`<sup>Optional</sup> <a name="TargetUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput"></a>

```csharp
public double TargetUtilizationInput { get; }
```

- *Type:* double

---

##### `AggregationWindowLength`<sup>Required</sup> <a name="AggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength"></a>

```csharp
public string AggregationWindowLength { get; }
```

- *Type:* string

---

##### `TargetUtilization`<sup>Required</sup> <a name="TargetUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization"></a>

```csharp
public double TargetUtilization { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond">ResetTargetReadBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond">ResetTargetReadOpsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond">ResetTargetWriteBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond">ResetTargetWriteOpsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetReadBytesPerSecond` <a name="ResetTargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond"></a>

```csharp
private void ResetTargetReadBytesPerSecond()
```

##### `ResetTargetReadOpsPerSecond` <a name="ResetTargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond"></a>

```csharp
private void ResetTargetReadOpsPerSecond()
```

##### `ResetTargetWriteBytesPerSecond` <a name="ResetTargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond"></a>

```csharp
private void ResetTargetWriteBytesPerSecond()
```

##### `ResetTargetWriteOpsPerSecond` <a name="ResetTargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond"></a>

```csharp
private void ResetTargetWriteOpsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput">TargetReadBytesPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput">TargetReadOpsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput">TargetWriteBytesPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput">TargetWriteOpsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond">TargetReadBytesPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond">TargetReadOpsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond">TargetWriteBytesPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond">TargetWriteOpsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetReadBytesPerSecondInput`<sup>Optional</sup> <a name="TargetReadBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput"></a>

```csharp
public double TargetReadBytesPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetReadOpsPerSecondInput`<sup>Optional</sup> <a name="TargetReadOpsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput"></a>

```csharp
public double TargetReadOpsPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetWriteBytesPerSecondInput`<sup>Optional</sup> <a name="TargetWriteBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput"></a>

```csharp
public double TargetWriteBytesPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetWriteOpsPerSecondInput`<sup>Optional</sup> <a name="TargetWriteOpsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput"></a>

```csharp
public double TargetWriteOpsPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetReadBytesPerSecond`<sup>Required</sup> <a name="TargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond"></a>

```csharp
public double TargetReadBytesPerSecond { get; }
```

- *Type:* double

---

##### `TargetReadOpsPerSecond`<sup>Required</sup> <a name="TargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond"></a>

```csharp
public double TargetReadOpsPerSecond { get; }
```

- *Type:* double

---

##### `TargetWriteBytesPerSecond`<sup>Required</sup> <a name="TargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond"></a>

```csharp
public double TargetWriteBytesPerSecond { get; }
```

- *Type:* double

---

##### `TargetWriteOpsPerSecond`<sup>Required</sup> <a name="TargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond"></a>

```csharp
public double TargetWriteOpsPerSecond { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond">ResetTargetReceivedBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond">ResetTargetReceivedPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond">ResetTargetSentBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond">ResetTargetSentPacketsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetReceivedBytesPerSecond` <a name="ResetTargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond"></a>

```csharp
private void ResetTargetReceivedBytesPerSecond()
```

##### `ResetTargetReceivedPacketsPerSecond` <a name="ResetTargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond"></a>

```csharp
private void ResetTargetReceivedPacketsPerSecond()
```

##### `ResetTargetSentBytesPerSecond` <a name="ResetTargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond"></a>

```csharp
private void ResetTargetSentBytesPerSecond()
```

##### `ResetTargetSentPacketsPerSecond` <a name="ResetTargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond"></a>

```csharp
private void ResetTargetSentPacketsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput">TargetReceivedBytesPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput">TargetReceivedPacketsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput">TargetSentBytesPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput">TargetSentPacketsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond">TargetReceivedBytesPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond">TargetReceivedPacketsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond">TargetSentBytesPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond">TargetSentPacketsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetReceivedBytesPerSecondInput`<sup>Optional</sup> <a name="TargetReceivedBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput"></a>

```csharp
public double TargetReceivedBytesPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetReceivedPacketsPerSecondInput`<sup>Optional</sup> <a name="TargetReceivedPacketsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput"></a>

```csharp
public double TargetReceivedPacketsPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetSentBytesPerSecondInput`<sup>Optional</sup> <a name="TargetSentBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput"></a>

```csharp
public double TargetSentBytesPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetSentPacketsPerSecondInput`<sup>Optional</sup> <a name="TargetSentPacketsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput"></a>

```csharp
public double TargetSentPacketsPerSecondInput { get; }
```

- *Type:* double

---

##### `TargetReceivedBytesPerSecond`<sup>Required</sup> <a name="TargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond"></a>

```csharp
public double TargetReceivedBytesPerSecond { get; }
```

- *Type:* double

---

##### `TargetReceivedPacketsPerSecond`<sup>Required</sup> <a name="TargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond"></a>

```csharp
public double TargetReceivedPacketsPerSecond { get; }
```

- *Type:* double

---

##### `TargetSentBytesPerSecond`<sup>Required</sup> <a name="TargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond"></a>

```csharp
public double TargetSentBytesPerSecond { get; }
```

- *Type:* double

---

##### `TargetSentPacketsPerSecond`<sup>Required</sup> <a name="TargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond"></a>

```csharp
public double TargetSentPacketsPerSecond { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization">PutDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization">PutNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization">PutRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod">ResetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization">ResetDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">ResetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">ResetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances">ResetMaxTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">ResetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances">ResetMinTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization">ResetNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization">ResetRequestUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization"></a>

```csharp
private void PutCpuUtilization(GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `PutDiskUtilization` <a name="PutDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization"></a>

```csharp
private void PutDiskUtilization(GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `PutNetworkUtilization` <a name="PutNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization"></a>

```csharp
private void PutNetworkUtilization(GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `PutRequestUtilization` <a name="PutRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization"></a>

```csharp
private void PutRequestUtilization(GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `ResetCoolDownPeriod` <a name="ResetCoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod"></a>

```csharp
private void ResetCoolDownPeriod()
```

##### `ResetDiskUtilization` <a name="ResetDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization"></a>

```csharp
private void ResetDiskUtilization()
```

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```csharp
private void ResetMaxConcurrentRequests()
```

##### `ResetMaxIdleInstances` <a name="ResetMaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```csharp
private void ResetMaxIdleInstances()
```

##### `ResetMaxPendingLatency` <a name="ResetMaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```csharp
private void ResetMaxPendingLatency()
```

##### `ResetMaxTotalInstances` <a name="ResetMaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances"></a>

```csharp
private void ResetMaxTotalInstances()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```csharp
private void ResetMinIdleInstances()
```

##### `ResetMinPendingLatency` <a name="ResetMinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```csharp
private void ResetMinPendingLatency()
```

##### `ResetMinTotalInstances` <a name="ResetMinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances"></a>

```csharp
private void ResetMinTotalInstances()
```

##### `ResetNetworkUtilization` <a name="ResetNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization"></a>

```csharp
private void ResetNetworkUtilization()
```

##### `ResetRequestUtilization` <a name="ResetRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization"></a>

```csharp
private void ResetRequestUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization">DiskUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization">NetworkUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization">RequestUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput">CoolDownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput">DiskUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">MaxIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">MaxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput">MaxTotalInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">MinPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput">MinTotalInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput">NetworkUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput">RequestUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances">MaxTotalInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency">MinPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances">MinTotalInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference CpuUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a>

---

##### `DiskUtilization`<sup>Required</sup> <a name="DiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference DiskUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a>

---

##### `NetworkUtilization`<sup>Required</sup> <a name="NetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference NetworkUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a>

---

##### `RequestUtilization`<sup>Required</sup> <a name="RequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference RequestUtilization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a>

---

##### `CoolDownPeriodInput`<sup>Optional</sup> <a name="CoolDownPeriodInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput"></a>

```csharp
public string CoolDownPeriodInput { get; }
```

- *Type:* string

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization CpuUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `DiskUtilizationInput`<sup>Optional</sup> <a name="DiskUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization DiskUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```csharp
public double MaxConcurrentRequestsInput { get; }
```

- *Type:* double

---

##### `MaxIdleInstancesInput`<sup>Optional</sup> <a name="MaxIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```csharp
public double MaxIdleInstancesInput { get; }
```

- *Type:* double

---

##### `MaxPendingLatencyInput`<sup>Optional</sup> <a name="MaxPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```csharp
public string MaxPendingLatencyInput { get; }
```

- *Type:* string

---

##### `MaxTotalInstancesInput`<sup>Optional</sup> <a name="MaxTotalInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput"></a>

```csharp
public double MaxTotalInstancesInput { get; }
```

- *Type:* double

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```csharp
public double MinIdleInstancesInput { get; }
```

- *Type:* double

---

##### `MinPendingLatencyInput`<sup>Optional</sup> <a name="MinPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```csharp
public string MinPendingLatencyInput { get; }
```

- *Type:* string

---

##### `MinTotalInstancesInput`<sup>Optional</sup> <a name="MinTotalInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput"></a>

```csharp
public double MinTotalInstancesInput { get; }
```

- *Type:* double

---

##### `NetworkUtilizationInput`<sup>Optional</sup> <a name="NetworkUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization NetworkUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `RequestUtilizationInput`<sup>Optional</sup> <a name="RequestUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization RequestUtilizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `CoolDownPeriod`<sup>Required</sup> <a name="CoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod"></a>

```csharp
public string CoolDownPeriod { get; }
```

- *Type:* string

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; }
```

- *Type:* double

---

##### `MaxIdleInstances`<sup>Required</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```csharp
public double MaxIdleInstances { get; }
```

- *Type:* double

---

##### `MaxPendingLatency`<sup>Required</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```csharp
public string MaxPendingLatency { get; }
```

- *Type:* string

---

##### `MaxTotalInstances`<sup>Required</sup> <a name="MaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances"></a>

```csharp
public double MaxTotalInstances { get; }
```

- *Type:* double

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; }
```

- *Type:* double

---

##### `MinPendingLatency`<sup>Required</sup> <a name="MinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```csharp
public string MinPendingLatency { get; }
```

- *Type:* string

---

##### `MinTotalInstances`<sup>Required</sup> <a name="MinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances"></a>

```csharp
public double MinTotalInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests">ResetTargetConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond">ResetTargetRequestCountPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetConcurrentRequests` <a name="ResetTargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests"></a>

```csharp
private void ResetTargetConcurrentRequests()
```

##### `ResetTargetRequestCountPerSecond` <a name="ResetTargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond"></a>

```csharp
private void ResetTargetRequestCountPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput">TargetConcurrentRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput">TargetRequestCountPerSecondInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests">TargetConcurrentRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond">TargetRequestCountPerSecond</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetConcurrentRequestsInput`<sup>Optional</sup> <a name="TargetConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput"></a>

```csharp
public double TargetConcurrentRequestsInput { get; }
```

- *Type:* double

---

##### `TargetRequestCountPerSecondInput`<sup>Optional</sup> <a name="TargetRequestCountPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput"></a>

```csharp
public string TargetRequestCountPerSecondInput { get; }
```

- *Type:* string

---

##### `TargetConcurrentRequests`<sup>Required</sup> <a name="TargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests"></a>

```csharp
public double TargetConcurrentRequests { get; }
```

- *Type:* double

---

##### `TargetRequestCountPerSecond`<sup>Required</sup> <a name="TargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond"></a>

```csharp
public string TargetRequestCountPerSecond { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout">ResetCloudBuildTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudBuildTimeout` <a name="ResetCloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout"></a>

```csharp
private void ResetCloudBuildTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput">AppYamlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput">CloudBuildTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath">AppYamlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout">CloudBuildTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppYamlPathInput`<sup>Optional</sup> <a name="AppYamlPathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput"></a>

```csharp
public string AppYamlPathInput { get; }
```

- *Type:* string

---

##### `CloudBuildTimeoutInput`<sup>Optional</sup> <a name="CloudBuildTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput"></a>

```csharp
public string CloudBuildTimeoutInput { get; }
```

- *Type:* string

---

##### `AppYamlPath`<sup>Required</sup> <a name="AppYamlPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath"></a>

```csharp
public string AppYamlPath { get; }
```

- *Type:* string

---

##### `CloudBuildTimeout`<sup>Required</sup> <a name="CloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout"></a>

```csharp
public string CloudBuildTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentFilesList <a name="GoogleAppEngineFlexibleAppVersionDeploymentFilesList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get"></a>

```csharp
private GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum">ResetSha1Sum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha1Sum` <a name="ResetSha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```csharp
private void ResetSha1Sum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput">Sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum">Sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Sha1SumInput`<sup>Optional</sup> <a name="Sha1SumInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```csharp
public string Sha1SumInput { get; }
```

- *Type:* string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sha1Sum`<sup>Required</sup> <a name="Sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```csharp
public string Sha1Sum { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionDeploymentOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions">PutCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions">ResetCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudBuildOptions` <a name="PutCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions"></a>

```csharp
private void PutCloudBuildOptions(GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer"></a>

```csharp
private void PutContainer(GoogleAppEngineFlexibleAppVersionDeploymentContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `PutFiles` <a name="PutFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles"></a>

```csharp
private void PutFiles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* object

---

##### `PutZip` <a name="PutZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip"></a>

```csharp
private void PutZip(GoogleAppEngineFlexibleAppVersionDeploymentZip Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `ResetCloudBuildOptions` <a name="ResetCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions"></a>

```csharp
private void ResetCloudBuildOptions()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles"></a>

```csharp
private void ResetFiles()
```

##### `ResetZip` <a name="ResetZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetZip"></a>

```csharp
private void ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions">CloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.files">Files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList">GoogleAppEngineFlexibleAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput">CloudBuildOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput">FilesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput">ZipInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudBuildOptions`<sup>Required</sup> <a name="CloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference CloudBuildOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.container"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference Container { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference</a>

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.files"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentFilesList Files { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList">GoogleAppEngineFlexibleAppVersionDeploymentFilesList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zip"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference Zip { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference</a>

---

##### `CloudBuildOptionsInput`<sup>Optional</sup> <a name="CloudBuildOptionsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions CloudBuildOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentContainer ContainerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput"></a>

```csharp
public object FilesInput { get; }
```

- *Type:* object

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentZip ZipInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount">ResetFilesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilesCount` <a name="ResetFilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```csharp
private void ResetFilesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput">FilesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount">FilesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesCountInput`<sup>Optional</sup> <a name="FilesCountInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```csharp
public double FilesCountInput { get; }
```

- *Type:* double

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `FilesCount`<sup>Required</sup> <a name="FilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```csharp
public double FilesCount { get; }
```

- *Type:* double

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionDeploymentZip InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---


### GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference <a name="GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling">ResetDisableTraceSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy">ResetRolloutStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigId` <a name="ResetConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId"></a>

```csharp
private void ResetConfigId()
```

##### `ResetDisableTraceSampling` <a name="ResetDisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling"></a>

```csharp
private void ResetDisableTraceSampling()
```

##### `ResetRolloutStrategy` <a name="ResetRolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy"></a>

```csharp
private void ResetRolloutStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput">DisableTraceSamplingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput">RolloutStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling">DisableTraceSampling</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy">RolloutStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `DisableTraceSamplingInput`<sup>Optional</sup> <a name="DisableTraceSamplingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput"></a>

```csharp
public object DisableTraceSamplingInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RolloutStrategyInput`<sup>Optional</sup> <a name="RolloutStrategyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput"></a>

```csharp
public string RolloutStrategyInput { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `DisableTraceSampling`<sup>Required</sup> <a name="DisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling"></a>

```csharp
public object DisableTraceSampling { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RolloutStrategy`<sup>Required</sup> <a name="RolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy"></a>

```csharp
public string RolloutStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEndpointsApiService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---


### GoogleAppEngineFlexibleAppVersionEntrypointOutputReference <a name="GoogleAppEngineFlexibleAppVersionEntrypointOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionEntrypointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput">ShellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shell">Shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput"></a>

```csharp
public string ShellInput { get; }
```

- *Type:* string

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shell"></a>

```csharp
public string Shell { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionEntrypoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---


### GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference <a name="GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetRuntimeVersion"></a>

```csharp
private void ResetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersList <a name="GoogleAppEngineFlexibleAppVersionHandlersList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get"></a>

```csharp
private GoogleAppEngineFlexibleAppVersionHandlersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionHandlersOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles">PutStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">ResetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles">ResetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript"></a>

```csharp
private void PutScript(GoogleAppEngineFlexibleAppVersionHandlersScript Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---

##### `PutStaticFiles` <a name="PutStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles"></a>

```csharp
private void PutStaticFiles(GoogleAppEngineFlexibleAppVersionHandlersStaticFiles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```csharp
private void ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetRedirectHttpResponseCode` <a name="ResetRedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```csharp
private void ResetRedirectHttpResponseCode()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```csharp
private void ResetSecurityLevel()
```

##### `ResetStaticFiles` <a name="ResetStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles"></a>

```csharp
private void ResetStaticFiles()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex"></a>

```csharp
private void ResetUrlRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference">GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">RedirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput">ScriptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput">StaticFilesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput">UrlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex">UrlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.script"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference Script { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference">GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference</a>

---

##### `StaticFiles`<sup>Required</sup> <a name="StaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference StaticFiles { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a>

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```csharp
public string AuthFailActionInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `RedirectHttpResponseCodeInput`<sup>Optional</sup> <a name="RedirectHttpResponseCodeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```csharp
public string RedirectHttpResponseCodeInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersScript ScriptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `StaticFilesInput`<sup>Optional</sup> <a name="StaticFilesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersStaticFiles StaticFilesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```csharp
public string UrlRegexInput { get; }
```

- *Type:* string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `RedirectHttpResponseCode`<sup>Required</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```csharp
public string RedirectHttpResponseCode { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex"></a>

```csharp
public string UrlRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersScript InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">ResetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">ResetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">ResetUploadPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationReadable` <a name="ResetApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```csharp
private void ResetApplicationReadable()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```csharp
private void ResetMimeType()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRequireMatchingFile` <a name="ResetRequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```csharp
private void ResetRequireMatchingFile()
```

##### `ResetUploadPathRegex` <a name="ResetUploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```csharp
private void ResetUploadPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">ApplicationReadableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">RequireMatchingFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">UploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">ApplicationReadable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">UploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationReadableInput`<sup>Optional</sup> <a name="ApplicationReadableInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```csharp
public object ApplicationReadableInput { get; }
```

- *Type:* object

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequireMatchingFileInput`<sup>Optional</sup> <a name="RequireMatchingFileInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```csharp
public object RequireMatchingFileInput { get; }
```

- *Type:* object

---

##### `UploadPathRegexInput`<sup>Optional</sup> <a name="UploadPathRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```csharp
public string UploadPathRegexInput { get; }
```

- *Type:* string

---

##### `ApplicationReadable`<sup>Required</sup> <a name="ApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```csharp
public object ApplicationReadable { get; }
```

- *Type:* object

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequireMatchingFile`<sup>Required</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```csharp
public object RequireMatchingFile { get; }
```

- *Type:* object

---

##### `UploadPathRegex`<sup>Required</sup> <a name="UploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```csharp
public string UploadPathRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionHandlersStaticFiles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---


### GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference <a name="GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval"></a>

```csharp
private void ResetCheckInterval()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay"></a>

```csharp
private void ResetInitialDelay()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay">InitialDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput"></a>

```csharp
public string CheckIntervalInput { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput"></a>

```csharp
public string InitialDelayInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput"></a>

```csharp
public double SuccessThresholdInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval"></a>

```csharp
public string CheckInterval { get; }
```

- *Type:* string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay"></a>

```csharp
public string InitialDelay { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionLivenessCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---


### GoogleAppEngineFlexibleAppVersionManualScalingOutputReference <a name="GoogleAppEngineFlexibleAppVersionManualScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionManualScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput">InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instances">Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput"></a>

```csharp
public double InstancesInput { get; }
```

- *Type:* double

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instances"></a>

```csharp
public double Instances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionManualScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---


### GoogleAppEngineFlexibleAppVersionNetworkOutputReference <a name="GoogleAppEngineFlexibleAppVersionNetworkOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts">ResetForwardedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceIpMode">ResetInstanceIpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag">ResetInstanceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardedPorts` <a name="ResetForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts"></a>

```csharp
private void ResetForwardedPorts()
```

##### `ResetInstanceIpMode` <a name="ResetInstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceIpMode"></a>

```csharp
private void ResetInstanceIpMode()
```

##### `ResetInstanceTag` <a name="ResetInstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag"></a>

```csharp
private void ResetInstanceTag()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity"></a>

```csharp
private void ResetSessionAffinity()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput">ForwardedPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpModeInput">InstanceIpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput">InstanceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts">ForwardedPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpMode">InstanceIpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag">InstanceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardedPortsInput`<sup>Optional</sup> <a name="ForwardedPortsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput"></a>

```csharp
public string[] ForwardedPortsInput { get; }
```

- *Type:* string[]

---

##### `InstanceIpModeInput`<sup>Optional</sup> <a name="InstanceIpModeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpModeInput"></a>

```csharp
public string InstanceIpModeInput { get; }
```

- *Type:* string

---

##### `InstanceTagInput`<sup>Optional</sup> <a name="InstanceTagInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput"></a>

```csharp
public string InstanceTagInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput"></a>

```csharp
public object SessionAffinityInput { get; }
```

- *Type:* object

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `ForwardedPorts`<sup>Required</sup> <a name="ForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts"></a>

```csharp
public string[] ForwardedPorts { get; }
```

- *Type:* string[]

---

##### `InstanceIpMode`<sup>Required</sup> <a name="InstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpMode"></a>

```csharp
public string InstanceIpMode { get; }
```

- *Type:* string

---

##### `InstanceTag`<sup>Required</sup> <a name="InstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag"></a>

```csharp
public string InstanceTag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity"></a>

```csharp
public object SessionAffinity { get; }
```

- *Type:* object

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---


### GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference <a name="GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout">ResetAppStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppStartTimeout` <a name="ResetAppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout"></a>

```csharp
private void ResetAppStartTimeout()
```

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval"></a>

```csharp
private void ResetCheckInterval()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput">AppStartTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout">AppStartTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppStartTimeoutInput`<sup>Optional</sup> <a name="AppStartTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput"></a>

```csharp
public string AppStartTimeoutInput { get; }
```

- *Type:* string

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput"></a>

```csharp
public string CheckIntervalInput { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput"></a>

```csharp
public double SuccessThresholdInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `AppStartTimeout`<sup>Required</sup> <a name="AppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout"></a>

```csharp
public string AppStartTimeout { get; }
```

- *Type:* string

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval"></a>

```csharp
public string CheckInterval { get; }
```

- *Type:* string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionReadinessCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---


### GoogleAppEngineFlexibleAppVersionResourcesOutputReference <a name="GoogleAppEngineFlexibleAppVersionResourcesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb">ResetDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb">ResetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* object

---

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetDiskGb` <a name="ResetDiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb"></a>

```csharp
private void ResetDiskGb()
```

##### `ResetMemoryGb` <a name="ResetMemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb"></a>

```csharp
private void ResetMemoryGb()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList">GoogleAppEngineFlexibleAppVersionResourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput">DiskGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput">MemoryGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput">VolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb">DiskGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumes"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionResourcesVolumesList Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList">GoogleAppEngineFlexibleAppVersionResourcesVolumesList</a>

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `DiskGbInput`<sup>Optional</sup> <a name="DiskGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput"></a>

```csharp
public double DiskGbInput { get; }
```

- *Type:* double

---

##### `MemoryGbInput`<sup>Optional</sup> <a name="MemoryGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput"></a>

```csharp
public double MemoryGbInput { get; }
```

- *Type:* double

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput"></a>

```csharp
public object VolumesInput { get; }
```

- *Type:* object

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `DiskGb`<sup>Required</sup> <a name="DiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb"></a>

```csharp
public double DiskGb { get; }
```

- *Type:* double

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---


### GoogleAppEngineFlexibleAppVersionResourcesVolumesList <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumesList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionResourcesVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get"></a>

```csharp
private GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput">SizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SizeGbInput`<sup>Optional</sup> <a name="SizeGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput"></a>

```csharp
public double SizeGbInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference <a name="GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference <a name="GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineFlexibleAppVersionVpcAccessConnector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---



