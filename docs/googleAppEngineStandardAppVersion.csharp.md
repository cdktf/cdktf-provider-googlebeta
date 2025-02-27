# `googleAppEngineStandardAppVersion` Submodule <a name="`googleAppEngineStandardAppVersion` Submodule" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineStandardAppVersion <a name="GoogleAppEngineStandardAppVersion" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersion(Construct Scope, string Id, GoogleAppEngineStandardAppVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig">GoogleAppEngineStandardAppVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig">GoogleAppEngineStandardAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling">PutAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling">PutBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint">PutEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers">PutHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries">PutLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling">PutManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector">PutVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAppEngineApis">ResetAppEngineApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAutomaticScaling">ResetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetBasicScaling">ResetBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetDeleteServiceOnDestroy">ResetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetEnvVariables">ResetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetHandlers">ResetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInboundServices">ResetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInstanceClass">ResetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetLibraries">ResetLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetManualScaling">ResetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetNoopOnDestroy">ResetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetRuntimeApiVersion">ResetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetThreadsafe">ResetThreadsafe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVpcAccessConnector">ResetVpcAccessConnector</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomaticScaling` <a name="PutAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling"></a>

```csharp
private void PutAutomaticScaling(GoogleAppEngineStandardAppVersionAutomaticScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---

##### `PutBasicScaling` <a name="PutBasicScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling"></a>

```csharp
private void PutBasicScaling(GoogleAppEngineStandardAppVersionBasicScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putBasicScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment"></a>

```csharp
private void PutDeployment(GoogleAppEngineStandardAppVersionDeployment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---

##### `PutEntrypoint` <a name="PutEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint"></a>

```csharp
private void PutEntrypoint(GoogleAppEngineStandardAppVersionEntrypoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---

##### `PutHandlers` <a name="PutHandlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers"></a>

```csharp
private void PutHandlers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* object

---

##### `PutLibraries` <a name="PutLibraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries"></a>

```csharp
private void PutLibraries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* object

---

##### `PutManualScaling` <a name="PutManualScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling"></a>

```csharp
private void PutManualScaling(GoogleAppEngineStandardAppVersionManualScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAppEngineStandardAppVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

---

##### `PutVpcAccessConnector` <a name="PutVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector"></a>

```csharp
private void PutVpcAccessConnector(GoogleAppEngineStandardAppVersionVpcAccessConnector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `ResetAppEngineApis` <a name="ResetAppEngineApis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAppEngineApis"></a>

```csharp
private void ResetAppEngineApis()
```

##### `ResetAutomaticScaling` <a name="ResetAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetAutomaticScaling"></a>

```csharp
private void ResetAutomaticScaling()
```

##### `ResetBasicScaling` <a name="ResetBasicScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetBasicScaling"></a>

```csharp
private void ResetBasicScaling()
```

##### `ResetDeleteServiceOnDestroy` <a name="ResetDeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```csharp
private void ResetDeleteServiceOnDestroy()
```

##### `ResetEnvVariables` <a name="ResetEnvVariables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetEnvVariables"></a>

```csharp
private void ResetEnvVariables()
```

##### `ResetHandlers` <a name="ResetHandlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetHandlers"></a>

```csharp
private void ResetHandlers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInboundServices` <a name="ResetInboundServices" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInboundServices"></a>

```csharp
private void ResetInboundServices()
```

##### `ResetInstanceClass` <a name="ResetInstanceClass" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetInstanceClass"></a>

```csharp
private void ResetInstanceClass()
```

##### `ResetLibraries` <a name="ResetLibraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetLibraries"></a>

```csharp
private void ResetLibraries()
```

##### `ResetManualScaling` <a name="ResetManualScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetManualScaling"></a>

```csharp
private void ResetManualScaling()
```

##### `ResetNoopOnDestroy` <a name="ResetNoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```csharp
private void ResetNoopOnDestroy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuntimeApiVersion` <a name="ResetRuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```csharp
private void ResetRuntimeApiVersion()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetThreadsafe` <a name="ResetThreadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetThreadsafe"></a>

```csharp
private void ResetThreadsafe()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

##### `ResetVpcAccessConnector` <a name="ResetVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```csharp
private void ResetVpcAccessConnector()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineStandardAppVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineStandardAppVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineStandardAppVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAppEngineStandardAppVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineStandardAppVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineStandardAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineStandardAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScaling">BasicScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference">GoogleAppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference">GoogleAppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference">GoogleAppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlers">Handlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList">GoogleAppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.libraries">Libraries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList">GoogleAppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference">GoogleAppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference">GoogleAppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApisInput">AppEngineApisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScalingInput">AutomaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScalingInput">BasicScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">DeleteServiceOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypointInput">EntrypointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariablesInput">EnvVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlersInput">HandlersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServicesInput">InboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.librariesInput">LibrariesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScalingInput">ManualScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroyInput">NoopOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersionInput">RuntimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafeInput">ThreadsafeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnectorInput">VpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApis">AppEngineApis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariables">EnvVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServices">InboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafe">Threadsafe</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutomaticScaling`<sup>Required</sup> <a name="AutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScaling"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference AutomaticScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `BasicScaling`<sup>Required</sup> <a name="BasicScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScaling"></a>

```csharp
public GoogleAppEngineStandardAppVersionBasicScalingOutputReference BasicScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference">GoogleAppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deployment"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeploymentOutputReference Deployment { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference">GoogleAppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypoint"></a>

```csharp
public GoogleAppEngineStandardAppVersionEntrypointOutputReference Entrypoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference">GoogleAppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlers"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersList Handlers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList">GoogleAppEngineStandardAppVersionHandlersList</a>

---

##### `Libraries`<sup>Required</sup> <a name="Libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.libraries"></a>

```csharp
public GoogleAppEngineStandardAppVersionLibrariesList Libraries { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList">GoogleAppEngineStandardAppVersionLibrariesList</a>

---

##### `ManualScaling`<sup>Required</sup> <a name="ManualScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScaling"></a>

```csharp
public GoogleAppEngineStandardAppVersionManualScalingOutputReference ManualScaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference">GoogleAppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeouts"></a>

```csharp
public GoogleAppEngineStandardAppVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference">GoogleAppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `VpcAccessConnector`<sup>Required</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```csharp
public GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference VpcAccessConnector { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `AppEngineApisInput`<sup>Optional</sup> <a name="AppEngineApisInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApisInput"></a>

```csharp
public object AppEngineApisInput { get; }
```

- *Type:* object

---

##### `AutomaticScalingInput`<sup>Optional</sup> <a name="AutomaticScalingInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.automaticScalingInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScaling AutomaticScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---

##### `BasicScalingInput`<sup>Optional</sup> <a name="BasicScalingInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.basicScalingInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionBasicScaling BasicScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---

##### `DeleteServiceOnDestroyInput`<sup>Optional</sup> <a name="DeleteServiceOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```csharp
public object DeleteServiceOnDestroyInput { get; }
```

- *Type:* object

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deploymentInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeployment DeploymentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.entrypointInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionEntrypoint EntrypointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---

##### `EnvVariablesInput`<sup>Optional</sup> <a name="EnvVariablesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HandlersInput`<sup>Optional</sup> <a name="HandlersInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.handlersInput"></a>

```csharp
public object HandlersInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundServicesInput`<sup>Optional</sup> <a name="InboundServicesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServicesInput"></a>

```csharp
public string[] InboundServicesInput { get; }
```

- *Type:* string[]

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `LibrariesInput`<sup>Optional</sup> <a name="LibrariesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.librariesInput"></a>

```csharp
public object LibrariesInput { get; }
```

- *Type:* object

---

##### `ManualScalingInput`<sup>Optional</sup> <a name="ManualScalingInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.manualScalingInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionManualScaling ManualScalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---

##### `NoopOnDestroyInput`<sup>Optional</sup> <a name="NoopOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```csharp
public object NoopOnDestroyInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeApiVersionInput`<sup>Optional</sup> <a name="RuntimeApiVersionInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```csharp
public string RuntimeApiVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ThreadsafeInput`<sup>Optional</sup> <a name="ThreadsafeInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafeInput"></a>

```csharp
public object ThreadsafeInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `VpcAccessConnectorInput`<sup>Optional</sup> <a name="VpcAccessConnectorInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionVpcAccessConnector VpcAccessConnectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `AppEngineApis`<sup>Required</sup> <a name="AppEngineApis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.appEngineApis"></a>

```csharp
public object AppEngineApis { get; }
```

- *Type:* object

---

##### `DeleteServiceOnDestroy`<sup>Required</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```csharp
public object DeleteServiceOnDestroy { get; }
```

- *Type:* object

---

##### `EnvVariables`<sup>Required</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.envVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InboundServices`<sup>Required</sup> <a name="InboundServices" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.inboundServices"></a>

```csharp
public string[] InboundServices { get; }
```

- *Type:* string[]

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `NoopOnDestroy`<sup>Required</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.noopOnDestroy"></a>

```csharp
public object NoopOnDestroy { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `RuntimeApiVersion`<sup>Required</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```csharp
public string RuntimeApiVersion { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Threadsafe`<sup>Required</sup> <a name="Threadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.threadsafe"></a>

```csharp
public object Threadsafe { get; }
```

- *Type:* object

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineStandardAppVersionAutomaticScaling <a name="GoogleAppEngineStandardAppVersionAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionAutomaticScaling {
    double MaxConcurrentRequests = null,
    double MaxIdleInstances = null,
    string MaxPendingLatency = null,
    double MinIdleInstances = null,
    string MinPendingLatency = null,
    GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings StandardSchedulerSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>double</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">MinPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">StandardSchedulerSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; set; }
```

- *Type:* double

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#max_concurrent_requests GoogleAppEngineStandardAppVersion#max_concurrent_requests}

---

##### `MaxIdleInstances`<sup>Optional</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```csharp
public double MaxIdleInstances { get; set; }
```

- *Type:* double

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#max_idle_instances GoogleAppEngineStandardAppVersion#max_idle_instances}

---

##### `MaxPendingLatency`<sup>Optional</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```csharp
public string MaxPendingLatency { get; set; }
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#max_pending_latency GoogleAppEngineStandardAppVersion#max_pending_latency}

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; set; }
```

- *Type:* double

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#min_idle_instances GoogleAppEngineStandardAppVersion#min_idle_instances}

---

##### `MinPendingLatency`<sup>Optional</sup> <a name="MinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```csharp
public string MinPendingLatency { get; set; }
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#min_pending_latency GoogleAppEngineStandardAppVersion#min_pending_latency}

---

##### `StandardSchedulerSettings`<sup>Optional</sup> <a name="StandardSchedulerSettings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings StandardSchedulerSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#standard_scheduler_settings GoogleAppEngineStandardAppVersion#standard_scheduler_settings}

---

### GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings {
    double MaxInstances = null,
    double MinInstances = null,
    double TargetCpuUtilization = null,
    double TargetThroughputUtilization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">MinInstances</a></code> | <code>double</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>double</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">TargetThroughputUtilization</a></code> | <code>double</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

**Note:** Starting from March 2025, App Engine sets the maxInstances default for standard environment deployments to 20. This change doesn't impact existing apps. To override the default, specify a new value between 0 and 2147483647, and deploy a new version or redeploy over an existing version. To disable the maxInstances default configuration setting, specify the maximum permitted value 2147483647.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```csharp
public double MinInstances { get; set; }
```

- *Type:* double

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#min_instances GoogleAppEngineStandardAppVersion#min_instances}

---

##### `TargetCpuUtilization`<sup>Optional</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```csharp
public double TargetCpuUtilization { get; set; }
```

- *Type:* double

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#target_cpu_utilization GoogleAppEngineStandardAppVersion#target_cpu_utilization}

---

##### `TargetThroughputUtilization`<sup>Optional</sup> <a name="TargetThroughputUtilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```csharp
public double TargetThroughputUtilization { get; set; }
```

- *Type:* double

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#target_throughput_utilization GoogleAppEngineStandardAppVersion#target_throughput_utilization}

---

### GoogleAppEngineStandardAppVersionBasicScaling <a name="GoogleAppEngineStandardAppVersionBasicScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionBasicScaling {
    double MaxInstances,
    string IdleTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#max_instances GoogleAppEngineStandardAppVersion#max_instances}

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#idle_timeout GoogleAppEngineStandardAppVersion#idle_timeout}

---

### GoogleAppEngineStandardAppVersionConfig <a name="GoogleAppEngineStandardAppVersionConfig" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleAppEngineStandardAppVersionDeployment Deployment,
    GoogleAppEngineStandardAppVersionEntrypoint Entrypoint,
    string Runtime,
    string Service,
    object AppEngineApis = null,
    GoogleAppEngineStandardAppVersionAutomaticScaling AutomaticScaling = null,
    GoogleAppEngineStandardAppVersionBasicScaling BasicScaling = null,
    object DeleteServiceOnDestroy = null,
    System.Collections.Generic.IDictionary<string, string> EnvVariables = null,
    object Handlers = null,
    string Id = null,
    string[] InboundServices = null,
    string InstanceClass = null,
    object Libraries = null,
    GoogleAppEngineStandardAppVersionManualScaling ManualScaling = null,
    object NoopOnDestroy = null,
    string Project = null,
    string RuntimeApiVersion = null,
    string ServiceAccount = null,
    object Threadsafe = null,
    GoogleAppEngineStandardAppVersionTimeouts Timeouts = null,
    string VersionId = null,
    GoogleAppEngineStandardAppVersionVpcAccessConnector VpcAccessConnector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.entrypoint">Entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtime">Runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.service">Service</a></code> | <code>string</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.appEngineApis">AppEngineApis</a></code> | <code>object</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.automaticScaling">AutomaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.basicScaling">BasicScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">DeleteServiceOnDestroy</a></code> | <code>object</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.envVariables">EnvVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.handlers">Handlers</a></code> | <code>object</code> | handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.inboundServices">InboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.libraries">Libraries</a></code> | <code>object</code> | libraries block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.manualScaling">ManualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.noopOnDestroy">NoopOnDestroy</a></code> | <code>object</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtimeApiVersion">RuntimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.threadsafe">Threadsafe</a></code> | <code>object</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.versionId">VersionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.vpcAccessConnector">VpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deployment"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeployment Deployment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#deployment GoogleAppEngineStandardAppVersion#deployment}

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.entrypoint"></a>

```csharp
public GoogleAppEngineStandardAppVersionEntrypoint Entrypoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#entrypoint GoogleAppEngineStandardAppVersion#entrypoint}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#runtime GoogleAppEngineStandardAppVersion#runtime}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#service GoogleAppEngineStandardAppVersion#service}

---

##### `AppEngineApis`<sup>Optional</sup> <a name="AppEngineApis" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```csharp
public object AppEngineApis { get; set; }
```

- *Type:* object

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#app_engine_apis GoogleAppEngineStandardAppVersion#app_engine_apis}

---

##### `AutomaticScaling`<sup>Optional</sup> <a name="AutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScaling AutomaticScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#automatic_scaling GoogleAppEngineStandardAppVersion#automatic_scaling}

---

##### `BasicScaling`<sup>Optional</sup> <a name="BasicScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.basicScaling"></a>

```csharp
public GoogleAppEngineStandardAppVersionBasicScaling BasicScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#basic_scaling GoogleAppEngineStandardAppVersion#basic_scaling}

---

##### `DeleteServiceOnDestroy`<sup>Optional</sup> <a name="DeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```csharp
public object DeleteServiceOnDestroy { get; set; }
```

- *Type:* object

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#delete_service_on_destroy GoogleAppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `EnvVariables`<sup>Optional</sup> <a name="EnvVariables" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.envVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#env_variables GoogleAppEngineStandardAppVersion#env_variables}

---

##### `Handlers`<sup>Optional</sup> <a name="Handlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.handlers"></a>

```csharp
public object Handlers { get; set; }
```

- *Type:* object

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#handlers GoogleAppEngineStandardAppVersion#handlers}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#id GoogleAppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InboundServices`<sup>Optional</sup> <a name="InboundServices" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.inboundServices"></a>

```csharp
public string[] InboundServices { get; set; }
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#inbound_services GoogleAppEngineStandardAppVersion#inbound_services}

---

##### `InstanceClass`<sup>Optional</sup> <a name="InstanceClass" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#instance_class GoogleAppEngineStandardAppVersion#instance_class}

---

##### `Libraries`<sup>Optional</sup> <a name="Libraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.libraries"></a>

```csharp
public object Libraries { get; set; }
```

- *Type:* object

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#libraries GoogleAppEngineStandardAppVersion#libraries}

---

##### `ManualScaling`<sup>Optional</sup> <a name="ManualScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.manualScaling"></a>

```csharp
public GoogleAppEngineStandardAppVersionManualScaling ManualScaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#manual_scaling GoogleAppEngineStandardAppVersion#manual_scaling}

---

##### `NoopOnDestroy`<sup>Optional</sup> <a name="NoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```csharp
public object NoopOnDestroy { get; set; }
```

- *Type:* object

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#noop_on_destroy GoogleAppEngineStandardAppVersion#noop_on_destroy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#project GoogleAppEngineStandardAppVersion#project}.

---

##### `RuntimeApiVersion`<sup>Optional</sup> <a name="RuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```csharp
public string RuntimeApiVersion { get; set; }
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#runtime_api_version GoogleAppEngineStandardAppVersion#runtime_api_version}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#service_account GoogleAppEngineStandardAppVersion#service_account}

---

##### `Threadsafe`<sup>Optional</sup> <a name="Threadsafe" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.threadsafe"></a>

```csharp
public object Threadsafe { get; set; }
```

- *Type:* object

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#threadsafe GoogleAppEngineStandardAppVersion#threadsafe}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.timeouts"></a>

```csharp
public GoogleAppEngineStandardAppVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts">GoogleAppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#timeouts GoogleAppEngineStandardAppVersion#timeouts}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#version_id GoogleAppEngineStandardAppVersion#version_id}

---

##### `VpcAccessConnector`<sup>Optional</sup> <a name="VpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```csharp
public GoogleAppEngineStandardAppVersionVpcAccessConnector VpcAccessConnector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#vpc_access_connector GoogleAppEngineStandardAppVersion#vpc_access_connector}

---

### GoogleAppEngineStandardAppVersionDeployment <a name="GoogleAppEngineStandardAppVersionDeployment" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeployment {
    object Files = null,
    GoogleAppEngineStandardAppVersionDeploymentZip Zip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.files">Files</a></code> | <code>object</code> | files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.files"></a>

```csharp
public object Files { get; set; }
```

- *Type:* object

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#files GoogleAppEngineStandardAppVersion#files}

---

##### `Zip`<sup>Optional</sup> <a name="Zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment.property.zip"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeploymentZip Zip { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#zip GoogleAppEngineStandardAppVersion#zip}

---

### GoogleAppEngineStandardAppVersionDeploymentFiles <a name="GoogleAppEngineStandardAppVersionDeploymentFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeploymentFiles {
    string Name,
    string SourceUrl,
    string Sha1Sum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">Sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}.

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

##### `Sha1Sum`<sup>Optional</sup> <a name="Sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```csharp
public string Sha1Sum { get; set; }
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#sha1_sum GoogleAppEngineStandardAppVersion#sha1_sum}

---

### GoogleAppEngineStandardAppVersionDeploymentZip <a name="GoogleAppEngineStandardAppVersionDeploymentZip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeploymentZip {
    string SourceUrl,
    double FilesCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.filesCount">FilesCount</a></code> | <code>double</code> | files count. |

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; set; }
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#source_url GoogleAppEngineStandardAppVersion#source_url}

---

##### `FilesCount`<sup>Optional</sup> <a name="FilesCount" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```csharp
public double FilesCount { get; set; }
```

- *Type:* double

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#files_count GoogleAppEngineStandardAppVersion#files_count}

---

### GoogleAppEngineStandardAppVersionEntrypoint <a name="GoogleAppEngineStandardAppVersionEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionEntrypoint {
    string Shell
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.property.shell">Shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint.property.shell"></a>

```csharp
public string Shell { get; set; }
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#shell GoogleAppEngineStandardAppVersion#shell}

---

### GoogleAppEngineStandardAppVersionHandlers <a name="GoogleAppEngineStandardAppVersionHandlers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlers {
    string AuthFailAction = null,
    string Login = null,
    string RedirectHttpResponseCode = null,
    GoogleAppEngineStandardAppVersionHandlersScript Script = null,
    string SecurityLevel = null,
    GoogleAppEngineStandardAppVersionHandlersStaticFiles StaticFiles = null,
    string UrlRegex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.login">Login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.urlRegex">UrlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `AuthFailAction`<sup>Optional</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; set; }
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#auth_fail_action GoogleAppEngineStandardAppVersion#auth_fail_action}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.login"></a>

```csharp
public string Login { get; set; }
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#login GoogleAppEngineStandardAppVersion#login}

---

##### `RedirectHttpResponseCode`<sup>Optional</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```csharp
public string RedirectHttpResponseCode { get; set; }
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#redirect_http_response_code GoogleAppEngineStandardAppVersion#redirect_http_response_code}

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.script"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersScript Script { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#script GoogleAppEngineStandardAppVersion#script}

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#security_level GoogleAppEngineStandardAppVersion#security_level}

---

##### `StaticFiles`<sup>Optional</sup> <a name="StaticFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersStaticFiles StaticFiles { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#static_files GoogleAppEngineStandardAppVersion#static_files}

---

##### `UrlRegex`<sup>Optional</sup> <a name="UrlRegex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```csharp
public string UrlRegex { get; set; }
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#url_regex GoogleAppEngineStandardAppVersion#url_regex}

---

### GoogleAppEngineStandardAppVersionHandlersScript <a name="GoogleAppEngineStandardAppVersionHandlersScript" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlersScript {
    string ScriptPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#script_path GoogleAppEngineStandardAppVersion#script_path}

---

### GoogleAppEngineStandardAppVersionHandlersStaticFiles <a name="GoogleAppEngineStandardAppVersionHandlersStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlersStaticFiles {
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
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">ApplicationReadable</a></code> | <code>object</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.expiration">Expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">MimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.path">Path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>object</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">UploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `ApplicationReadable`<sup>Optional</sup> <a name="ApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```csharp
public object ApplicationReadable { get; set; }
```

- *Type:* object

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#application_readable GoogleAppEngineStandardAppVersion#application_readable}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#expiration GoogleAppEngineStandardAppVersion#expiration}

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#http_headers GoogleAppEngineStandardAppVersion#http_headers}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#mime_type GoogleAppEngineStandardAppVersion#mime_type}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#path GoogleAppEngineStandardAppVersion#path}

---

##### `RequireMatchingFile`<sup>Optional</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```csharp
public object RequireMatchingFile { get; set; }
```

- *Type:* object

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#require_matching_file GoogleAppEngineStandardAppVersion#require_matching_file}

---

##### `UploadPathRegex`<sup>Optional</sup> <a name="UploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```csharp
public string UploadPathRegex { get; set; }
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#upload_path_regex GoogleAppEngineStandardAppVersion#upload_path_regex}

---

### GoogleAppEngineStandardAppVersionLibraries <a name="GoogleAppEngineStandardAppVersionLibraries" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionLibraries {
    string Name = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.name">Name</a></code> | <code>string</code> | Name of the library. Example "django". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.version">Version</a></code> | <code>string</code> | Version of the library to select, or "latest". |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibraries.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#version GoogleAppEngineStandardAppVersion#version}

---

### GoogleAppEngineStandardAppVersionManualScaling <a name="GoogleAppEngineStandardAppVersionManualScaling" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionManualScaling {
    double Instances
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.property.instances">Instances</a></code> | <code>double</code> | Number of instances to assign to the service at the start. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling.property.instances"></a>

```csharp
public double Instances { get; set; }
```

- *Type:* double

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#instances GoogleAppEngineStandardAppVersion#instances}

---

### GoogleAppEngineStandardAppVersionTimeouts <a name="GoogleAppEngineStandardAppVersionTimeouts" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#create GoogleAppEngineStandardAppVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#delete GoogleAppEngineStandardAppVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#update GoogleAppEngineStandardAppVersion#update}.

---

### GoogleAppEngineStandardAppVersionVpcAccessConnector <a name="GoogleAppEngineStandardAppVersionVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionVpcAccessConnector {
    string Name,
    string EgressSetting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.name">Name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">EgressSetting</a></code> | <code>string</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#name GoogleAppEngineStandardAppVersion#name}

---

##### `EgressSetting`<sup>Optional</sup> <a name="EgressSetting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```csharp
public string EgressSetting { get; set; }
```

- *Type:* string

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_app_engine_standard_app_version#egress_setting GoogleAppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference <a name="GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">PutStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">ResetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">ResetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">ResetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">ResetStandardSchedulerSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStandardSchedulerSettings` <a name="PutStandardSchedulerSettings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```csharp
private void PutStandardSchedulerSettings(GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```csharp
private void ResetMaxConcurrentRequests()
```

##### `ResetMaxIdleInstances` <a name="ResetMaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```csharp
private void ResetMaxIdleInstances()
```

##### `ResetMaxPendingLatency` <a name="ResetMaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```csharp
private void ResetMaxPendingLatency()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```csharp
private void ResetMinIdleInstances()
```

##### `ResetMinPendingLatency` <a name="ResetMinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```csharp
private void ResetMinPendingLatency()
```

##### `ResetStandardSchedulerSettings` <a name="ResetStandardSchedulerSettings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```csharp
private void ResetStandardSchedulerSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">StandardSchedulerSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">MaxIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">MaxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">MinPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">StandardSchedulerSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">MaxIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">MaxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">MinPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardSchedulerSettings`<sup>Required</sup> <a name="StandardSchedulerSettings" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference StandardSchedulerSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```csharp
public double MaxConcurrentRequestsInput { get; }
```

- *Type:* double

---

##### `MaxIdleInstancesInput`<sup>Optional</sup> <a name="MaxIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```csharp
public double MaxIdleInstancesInput { get; }
```

- *Type:* double

---

##### `MaxPendingLatencyInput`<sup>Optional</sup> <a name="MaxPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```csharp
public string MaxPendingLatencyInput { get; }
```

- *Type:* string

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```csharp
public double MinIdleInstancesInput { get; }
```

- *Type:* double

---

##### `MinPendingLatencyInput`<sup>Optional</sup> <a name="MinPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```csharp
public string MinPendingLatencyInput { get; }
```

- *Type:* string

---

##### `StandardSchedulerSettingsInput`<sup>Optional</sup> <a name="StandardSchedulerSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings StandardSchedulerSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; }
```

- *Type:* double

---

##### `MaxIdleInstances`<sup>Required</sup> <a name="MaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```csharp
public double MaxIdleInstances { get; }
```

- *Type:* double

---

##### `MaxPendingLatency`<sup>Required</sup> <a name="MaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```csharp
public string MaxPendingLatency { get; }
```

- *Type:* string

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; }
```

- *Type:* double

---

##### `MinPendingLatency`<sup>Required</sup> <a name="MinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```csharp
public string MinPendingLatency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScaling">GoogleAppEngineStandardAppVersionAutomaticScaling</a>

---


### GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">ResetTargetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">ResetTargetThroughputUtilization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```csharp
private void ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```csharp
private void ResetMinInstances()
```

##### `ResetTargetCpuUtilization` <a name="ResetTargetCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```csharp
private void ResetTargetCpuUtilization()
```

##### `ResetTargetThroughputUtilization` <a name="ResetTargetThroughputUtilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```csharp
private void ResetTargetThroughputUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">TargetCpuUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">TargetThroughputUtilizationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">TargetCpuUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">TargetThroughputUtilization</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```csharp
public double MinInstancesInput { get; }
```

- *Type:* double

---

##### `TargetCpuUtilizationInput`<sup>Optional</sup> <a name="TargetCpuUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```csharp
public double TargetCpuUtilizationInput { get; }
```

- *Type:* double

---

##### `TargetThroughputUtilizationInput`<sup>Optional</sup> <a name="TargetThroughputUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```csharp
public double TargetThroughputUtilizationInput { get; }
```

- *Type:* double

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `TargetCpuUtilization`<sup>Required</sup> <a name="TargetCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```csharp
public double TargetCpuUtilization { get; }
```

- *Type:* double

---

##### `TargetThroughputUtilization`<sup>Required</sup> <a name="TargetThroughputUtilization" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```csharp
public double TargetThroughputUtilization { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">GoogleAppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### GoogleAppEngineStandardAppVersionBasicScalingOutputReference <a name="GoogleAppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionBasicScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionBasicScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionBasicScaling">GoogleAppEngineStandardAppVersionBasicScaling</a>

---


### GoogleAppEngineStandardAppVersionDeploymentFilesList <a name="GoogleAppEngineStandardAppVersionDeploymentFilesList" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeploymentFilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get"></a>

```csharp
private GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">ResetSha1Sum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha1Sum` <a name="ResetSha1Sum" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```csharp
private void ResetSha1Sum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">Sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">Sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Sha1SumInput`<sup>Optional</sup> <a name="Sha1SumInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```csharp
public string Sha1SumInput { get; }
```

- *Type:* string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sha1Sum`<sup>Required</sup> <a name="Sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```csharp
public string Sha1Sum { get; }
```

- *Type:* string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionDeploymentOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip">PutZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetZip">ResetZip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFiles` <a name="PutFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```csharp
private void PutFiles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* object

---

##### `PutZip` <a name="PutZip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```csharp
private void PutZip(GoogleAppEngineStandardAppVersionDeploymentZip Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```csharp
private void ResetFiles()
```

##### `ResetZip` <a name="ResetZip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```csharp
private void ResetZip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.files">Files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList">GoogleAppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zip">Zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference">GoogleAppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">FilesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">ZipInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeploymentFilesList Files { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentFilesList">GoogleAppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `Zip`<sup>Required</sup> <a name="Zip" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeploymentZipOutputReference Zip { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference">GoogleAppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```csharp
public object FilesInput { get; }
```

- *Type:* object

---

##### `ZipInput`<sup>Optional</sup> <a name="ZipInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeploymentZip ZipInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeployment">GoogleAppEngineStandardAppVersionDeployment</a>

---


### GoogleAppEngineStandardAppVersionDeploymentZipOutputReference <a name="GoogleAppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionDeploymentZipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">ResetFilesCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilesCount` <a name="ResetFilesCount" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```csharp
private void ResetFilesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">FilesCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">FilesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesCountInput`<sup>Optional</sup> <a name="FilesCountInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```csharp
public double FilesCountInput { get; }
```

- *Type:* double

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```csharp
public string SourceUrlInput { get; }
```

- *Type:* string

---

##### `FilesCount`<sup>Required</sup> <a name="FilesCount" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```csharp
public double FilesCount { get; }
```

- *Type:* double

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```csharp
public string SourceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionDeploymentZip InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionDeploymentZip">GoogleAppEngineStandardAppVersionDeploymentZip</a>

---


### GoogleAppEngineStandardAppVersionEntrypointOutputReference <a name="GoogleAppEngineStandardAppVersionEntrypointOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionEntrypointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">ShellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shell">Shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShellInput`<sup>Optional</sup> <a name="ShellInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```csharp
public string ShellInput { get; }
```

- *Type:* string

---

##### `Shell`<sup>Required</sup> <a name="Shell" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```csharp
public string Shell { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionEntrypoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionEntrypoint">GoogleAppEngineStandardAppVersionEntrypoint</a>

---


### GoogleAppEngineStandardAppVersionHandlersList <a name="GoogleAppEngineStandardAppVersionHandlersList" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get"></a>

```csharp
private GoogleAppEngineStandardAppVersionHandlersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionHandlersOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">PutStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">ResetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">ResetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">ResetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">ResetUrlRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```csharp
private void PutScript(GoogleAppEngineStandardAppVersionHandlersScript Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---

##### `PutStaticFiles` <a name="PutStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```csharp
private void PutStaticFiles(GoogleAppEngineStandardAppVersionHandlersStaticFiles Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `ResetAuthFailAction` <a name="ResetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```csharp
private void ResetAuthFailAction()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetRedirectHttpResponseCode` <a name="ResetRedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```csharp
private void ResetRedirectHttpResponseCode()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```csharp
private void ResetSecurityLevel()
```

##### `ResetStaticFiles` <a name="ResetStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```csharp
private void ResetStaticFiles()
```

##### `ResetUrlRegex` <a name="ResetUrlRegex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```csharp
private void ResetUrlRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.script">Script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference">GoogleAppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">StaticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">AuthFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.loginInput">LoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">RedirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">ScriptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">StaticFilesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">UrlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">AuthFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.login">Login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">RedirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">UrlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersScriptOutputReference Script { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference">GoogleAppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `StaticFiles`<sup>Required</sup> <a name="StaticFiles" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference StaticFiles { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `AuthFailActionInput`<sup>Optional</sup> <a name="AuthFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```csharp
public string AuthFailActionInput { get; }
```

- *Type:* string

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```csharp
public string LoginInput { get; }
```

- *Type:* string

---

##### `RedirectHttpResponseCodeInput`<sup>Optional</sup> <a name="RedirectHttpResponseCodeInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```csharp
public string RedirectHttpResponseCodeInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersScript ScriptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `StaticFilesInput`<sup>Optional</sup> <a name="StaticFilesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersStaticFiles StaticFilesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `UrlRegexInput`<sup>Optional</sup> <a name="UrlRegexInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```csharp
public string UrlRegexInput { get; }
```

- *Type:* string

---

##### `AuthFailAction`<sup>Required</sup> <a name="AuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```csharp
public string AuthFailAction { get; }
```

- *Type:* string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```csharp
public string Login { get; }
```

- *Type:* string

---

##### `RedirectHttpResponseCode`<sup>Required</sup> <a name="RedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```csharp
public string RedirectHttpResponseCode { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `UrlRegex`<sup>Required</sup> <a name="UrlRegex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```csharp
public string UrlRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionHandlersScriptOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlersScriptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersScript InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersScript">GoogleAppEngineStandardAppVersionHandlersScript</a>

---


### GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">ResetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">ResetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">ResetUploadPathRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationReadable` <a name="ResetApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```csharp
private void ResetApplicationReadable()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```csharp
private void ResetHttpHeaders()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```csharp
private void ResetMimeType()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRequireMatchingFile` <a name="ResetRequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```csharp
private void ResetRequireMatchingFile()
```

##### `ResetUploadPathRegex` <a name="ResetUploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```csharp
private void ResetUploadPathRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">ApplicationReadableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">RequireMatchingFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">UploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">ApplicationReadable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">RequireMatchingFile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">UploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationReadableInput`<sup>Optional</sup> <a name="ApplicationReadableInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```csharp
public object ApplicationReadableInput { get; }
```

- *Type:* object

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequireMatchingFileInput`<sup>Optional</sup> <a name="RequireMatchingFileInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```csharp
public object RequireMatchingFileInput { get; }
```

- *Type:* object

---

##### `UploadPathRegexInput`<sup>Optional</sup> <a name="UploadPathRegexInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```csharp
public string UploadPathRegexInput { get; }
```

- *Type:* string

---

##### `ApplicationReadable`<sup>Required</sup> <a name="ApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```csharp
public object ApplicationReadable { get; }
```

- *Type:* object

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HttpHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequireMatchingFile`<sup>Required</sup> <a name="RequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```csharp
public object RequireMatchingFile { get; }
```

- *Type:* object

---

##### `UploadPathRegex`<sup>Required</sup> <a name="UploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```csharp
public string UploadPathRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionHandlersStaticFiles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionHandlersStaticFiles">GoogleAppEngineStandardAppVersionHandlersStaticFiles</a>

---


### GoogleAppEngineStandardAppVersionLibrariesList <a name="GoogleAppEngineStandardAppVersionLibrariesList" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionLibrariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get"></a>

```csharp
private GoogleAppEngineStandardAppVersionLibrariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionLibrariesOutputReference <a name="GoogleAppEngineStandardAppVersionLibrariesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionLibrariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionManualScalingOutputReference <a name="GoogleAppEngineStandardAppVersionManualScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionManualScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instances">Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```csharp
public double InstancesInput { get; }
```

- *Type:* double

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```csharp
public double Instances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionManualScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionManualScaling">GoogleAppEngineStandardAppVersionManualScaling</a>

---


### GoogleAppEngineStandardAppVersionTimeoutsOutputReference <a name="GoogleAppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">ResetEgressSetting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressSetting` <a name="ResetEgressSetting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```csharp
private void ResetEgressSetting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">EgressSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">EgressSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressSettingInput`<sup>Optional</sup> <a name="EgressSettingInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```csharp
public string EgressSettingInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EgressSetting`<sup>Required</sup> <a name="EgressSetting" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```csharp
public string EgressSetting { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```csharp
public GoogleAppEngineStandardAppVersionVpcAccessConnector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineStandardAppVersion.GoogleAppEngineStandardAppVersionVpcAccessConnector">GoogleAppEngineStandardAppVersionVpcAccessConnector</a>

---



