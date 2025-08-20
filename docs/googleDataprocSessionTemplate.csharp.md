# `googleDataprocSessionTemplate` Submodule <a name="`googleDataprocSessionTemplate` Submodule" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocSessionTemplate <a name="GoogleDataprocSessionTemplate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template google_dataproc_session_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplate(Construct Scope, string Id, GoogleDataprocSessionTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig">GoogleDataprocSessionTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig">GoogleDataprocSessionTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig">PutEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession">PutJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession">PutSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetEnvironmentConfig">ResetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetJupyterSession">ResetJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetSparkConnectSession">ResetSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfig` <a name="PutEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig"></a>

```csharp
private void PutEnvironmentConfig(GoogleDataprocSessionTemplateEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---

##### `PutJupyterSession` <a name="PutJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession"></a>

```csharp
private void PutJupyterSession(GoogleDataprocSessionTemplateJupyterSession Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putJupyterSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(GoogleDataprocSessionTemplateRuntimeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---

##### `PutSparkConnectSession` <a name="PutSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession"></a>

```csharp
private void PutSparkConnectSession(GoogleDataprocSessionTemplateSparkConnectSession Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putSparkConnectSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataprocSessionTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

---

##### `ResetEnvironmentConfig` <a name="ResetEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetEnvironmentConfig"></a>

```csharp
private void ResetEnvironmentConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJupyterSession` <a name="ResetJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetJupyterSession"></a>

```csharp
private void ResetJupyterSession()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetRuntimeConfig"></a>

```csharp
private void ResetRuntimeConfig()
```

##### `ResetSparkConnectSession` <a name="ResetSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetSparkConnectSession"></a>

```csharp
private void ResetSparkConnectSession()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocSessionTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocSessionTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocSessionTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocSessionTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocSessionTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocSessionTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocSessionTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSession">JupyterSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference">GoogleDataprocSessionTemplateJupyterSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference">GoogleDataprocSessionTemplateRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSession">SparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference">GoogleDataprocSessionTemplateSparkConnectSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference">GoogleDataprocSessionTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfigInput">EnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSessionInput">JupyterSessionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSessionInput">SparkConnectSessionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigOutputReference EnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigOutputReference</a>

---

##### `JupyterSession`<sup>Required</sup> <a name="JupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSession"></a>

```csharp
public GoogleDataprocSessionTemplateJupyterSessionOutputReference JupyterSession { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference">GoogleDataprocSessionTemplateJupyterSessionOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfig"></a>

```csharp
public GoogleDataprocSessionTemplateRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference">GoogleDataprocSessionTemplateRuntimeConfigOutputReference</a>

---

##### `SparkConnectSession`<sup>Required</sup> <a name="SparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSession"></a>

```csharp
public GoogleDataprocSessionTemplateSparkConnectSessionOutputReference SparkConnectSession { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference">GoogleDataprocSessionTemplateSparkConnectSessionOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeouts"></a>

```csharp
public GoogleDataprocSessionTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference">GoogleDataprocSessionTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `EnvironmentConfigInput`<sup>Optional</sup> <a name="EnvironmentConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.environmentConfigInput"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfig EnvironmentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JupyterSessionInput`<sup>Optional</sup> <a name="JupyterSessionInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.jupyterSessionInput"></a>

```csharp
public GoogleDataprocSessionTemplateJupyterSession JupyterSessionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.runtimeConfigInput"></a>

```csharp
public GoogleDataprocSessionTemplateRuntimeConfig RuntimeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---

##### `SparkConnectSessionInput`<sup>Optional</sup> <a name="SparkConnectSessionInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.sparkConnectSessionInput"></a>

```csharp
public GoogleDataprocSessionTemplateSparkConnectSession SparkConnectSessionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocSessionTemplateConfig <a name="GoogleDataprocSessionTemplateConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GoogleDataprocSessionTemplateEnvironmentConfig EnvironmentConfig = null,
    string Id = null,
    GoogleDataprocSessionTemplateJupyterSession JupyterSession = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GoogleDataprocSessionTemplateRuntimeConfig RuntimeConfig = null,
    GoogleDataprocSessionTemplateSparkConnectSession SparkConnectSession = null,
    GoogleDataprocSessionTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.jupyterSession">JupyterSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.sparkConnectSession">SparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#name GoogleDataprocSessionTemplate#name}

---

##### `EnvironmentConfig`<sup>Optional</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.environmentConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfig EnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#environment_config GoogleDataprocSessionTemplate#environment_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JupyterSession`<sup>Optional</sup> <a name="JupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.jupyterSession"></a>

```csharp
public GoogleDataprocSessionTemplateJupyterSession JupyterSession { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#jupyter_session GoogleDataprocSessionTemplate#jupyter_session}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#labels GoogleDataprocSessionTemplate#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#location GoogleDataprocSessionTemplate#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}.

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.runtimeConfig"></a>

```csharp
public GoogleDataprocSessionTemplateRuntimeConfig RuntimeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#runtime_config GoogleDataprocSessionTemplate#runtime_config}

---

##### `SparkConnectSession`<sup>Optional</sup> <a name="SparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.sparkConnectSession"></a>

```csharp
public GoogleDataprocSessionTemplateSparkConnectSession SparkConnectSession { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#spark_connect_session GoogleDataprocSessionTemplate#spark_connect_session}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateConfig.property.timeouts"></a>

```csharp
public GoogleDataprocSessionTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts">GoogleDataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#timeouts GoogleDataprocSessionTemplate#timeouts}

---

### GoogleDataprocSessionTemplateEnvironmentConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfig {
    GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig ExecutionConfig = null,
    GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig PeripheralsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `ExecutionConfig`<sup>Optional</sup> <a name="ExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.executionConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig ExecutionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#execution_config GoogleDataprocSessionTemplate#execution_config}

---

##### `PeripheralsConfig`<sup>Optional</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig PeripheralsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#peripherals_config GoogleDataprocSessionTemplate#peripherals_config}

---

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig {
    GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig AuthenticationConfig = null,
    string IdleTtl = null,
    string KmsKey = null,
    string[] NetworkTags = null,
    string ServiceAccount = null,
    string StagingBucket = null,
    string SubnetworkUri = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.idleTtl">IdleTtl</a></code> | <code>string</code> | The duration to keep the session alive while it's idling. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri">SubnetworkUri</a></code> | <code>string</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl">Ttl</a></code> | <code>string</code> | The duration after which the workload will be terminated. |

---

##### `AuthenticationConfig`<sup>Optional</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.authenticationConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig AuthenticationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#authentication_config GoogleDataprocSessionTemplate#authentication_config}

---

##### `IdleTtl`<sup>Optional</sup> <a name="IdleTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.idleTtl"></a>

```csharp
public string IdleTtl { get; set; }
```

- *Type:* string

The duration to keep the session alive while it's idling.

Exceeding this threshold causes the session to terminate. Minimum value is 10 minutes; maximum value is 14 day.
Defaults to 1 hour if not set. If both ttl and idleTtl are specified for an interactive session, the conditions
are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or when ttl has
been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#idle_ttl GoogleDataprocSessionTemplate#idle_ttl}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#kms_key GoogleDataprocSessionTemplate#kms_key}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#network_tags GoogleDataprocSessionTemplate#network_tags}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#service_account GoogleDataprocSessionTemplate#service_account}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; set; }
```

- *Type:* string

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#staging_bucket GoogleDataprocSessionTemplate#staging_bucket}

---

##### `SubnetworkUri`<sup>Optional</sup> <a name="SubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```csharp
public string SubnetworkUri { get; set; }
```

- *Type:* string

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#subnetwork_uri GoogleDataprocSessionTemplate#subnetwork_uri}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#ttl GoogleDataprocSessionTemplate#ttl}

---

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig {
    string UserWorkloadAuthenticationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType">UserWorkloadAuthenticationType</a></code> | <code>string</code> | Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"]. |

---

##### `UserWorkloadAuthenticationType`<sup>Optional</sup> <a name="UserWorkloadAuthenticationType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig.property.userWorkloadAuthenticationType"></a>

```csharp
public string UserWorkloadAuthenticationType { get; set; }
```

- *Type:* string

Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#user_workload_authentication_type GoogleDataprocSessionTemplate#user_workload_authentication_type}

---

### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig {
    string MetastoreService = null,
    GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService">MetastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `MetastoreService`<sup>Optional</sup> <a name="MetastoreService" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```csharp
public string MetastoreService { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#metastore_service GoogleDataprocSessionTemplate#metastore_service}

---

##### `SparkHistoryServerConfig`<sup>Optional</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#spark_history_server_config GoogleDataprocSessionTemplate#spark_history_server_config}

---

### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
    string DataprocCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `DataprocCluster`<sup>Optional</sup> <a name="DataprocCluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#dataproc_cluster GoogleDataprocSessionTemplate#dataproc_cluster}

---

### GoogleDataprocSessionTemplateJupyterSession <a name="GoogleDataprocSessionTemplateJupyterSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateJupyterSession {
    string DisplayName = null,
    string Kernel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.displayName">DisplayName</a></code> | <code>string</code> | Display name, shown in the Jupyter kernelspec card. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.kernel">Kernel</a></code> | <code>string</code> | Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#display_name GoogleDataprocSessionTemplate#display_name}

---

##### `Kernel`<sup>Optional</sup> <a name="Kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession.property.kernel"></a>

```csharp
public string Kernel { get; set; }
```

- *Type:* string

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#kernel GoogleDataprocSessionTemplate#kernel}

---

### GoogleDataprocSessionTemplateRuntimeConfig <a name="GoogleDataprocSessionTemplateRuntimeConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateRuntimeConfig {
    string ContainerImage = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.containerImage">ContainerImage</a></code> | <code>string</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.version">Version</a></code> | <code>string</code> | Version of the session runtime. |

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.containerImage"></a>

```csharp
public string ContainerImage { get; set; }
```

- *Type:* string

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#container_image GoogleDataprocSessionTemplate#container_image}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#properties GoogleDataprocSessionTemplate#properties}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#version GoogleDataprocSessionTemplate#version}

---

### GoogleDataprocSessionTemplateSparkConnectSession <a name="GoogleDataprocSessionTemplateSparkConnectSession" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateSparkConnectSession {

};
```


### GoogleDataprocSessionTemplateTimeouts <a name="GoogleDataprocSessionTemplateTimeouts" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType">ResetUserWorkloadAuthenticationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserWorkloadAuthenticationType` <a name="ResetUserWorkloadAuthenticationType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.resetUserWorkloadAuthenticationType"></a>

```csharp
private void ResetUserWorkloadAuthenticationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput">UserWorkloadAuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType">UserWorkloadAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserWorkloadAuthenticationTypeInput`<sup>Optional</sup> <a name="UserWorkloadAuthenticationTypeInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationTypeInput"></a>

```csharp
public string UserWorkloadAuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `UserWorkloadAuthenticationType`<sup>Required</sup> <a name="UserWorkloadAuthenticationType" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.userWorkloadAuthenticationType"></a>

```csharp
public string UserWorkloadAuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig">PutAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig">ResetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetIdleTtl">ResetIdleTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">ResetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfig` <a name="PutAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig"></a>

```csharp
private void PutAuthenticationConfig(GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `ResetAuthenticationConfig` <a name="ResetAuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetAuthenticationConfig"></a>

```csharp
private void ResetAuthenticationConfig()
```

##### `ResetIdleTtl` <a name="ResetIdleTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetIdleTtl"></a>

```csharp
private void ResetIdleTtl()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```csharp
private void ResetStagingBucket()
```

##### `ResetSubnetworkUri` <a name="ResetSubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```csharp
private void ResetSubnetworkUri()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput">AuthenticationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtlInput">IdleTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">SubnetworkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtl">IdleTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">SubnetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference AuthenticationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference</a>

---

##### `AuthenticationConfigInput`<sup>Optional</sup> <a name="AuthenticationConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.authenticationConfigInput"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig AuthenticationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig</a>

---

##### `IdleTtlInput`<sup>Optional</sup> <a name="IdleTtlInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtlInput"></a>

```csharp
public string IdleTtlInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```csharp
public string StagingBucketInput { get; }
```

- *Type:* string

---

##### `SubnetworkUriInput`<sup>Optional</sup> <a name="SubnetworkUriInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```csharp
public string SubnetworkUriInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `IdleTtl`<sup>Required</sup> <a name="IdleTtl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.idleTtl"></a>

```csharp
public string IdleTtl { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; }
```

- *Type:* string

---

##### `SubnetworkUri`<sup>Required</sup> <a name="SubnetworkUri" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```csharp
public string SubnetworkUri { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig">PutExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig">PutPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig">ResetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig">ResetPeripheralsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionConfig` <a name="PutExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig"></a>

```csharp
private void PutExecutionConfig(GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `PutPeripheralsConfig` <a name="PutPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```csharp
private void PutPeripheralsConfig(GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `ResetExecutionConfig` <a name="ResetExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```csharp
private void ResetExecutionConfig()
```

##### `ResetPeripheralsConfig` <a name="ResetPeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```csharp
private void ResetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput">ExecutionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput">PeripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionConfig`<sup>Required</sup> <a name="ExecutionConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference ExecutionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `PeripheralsConfig`<sup>Required</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference PeripheralsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `ExecutionConfigInput`<sup>Optional</sup> <a name="ExecutionConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig ExecutionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig">GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `PeripheralsConfigInput`<sup>Optional</sup> <a name="PeripheralsConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig PeripheralsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfig">GoogleDataprocSessionTemplateEnvironmentConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">PutSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">ResetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">ResetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkHistoryServerConfig` <a name="PutSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```csharp
private void PutSparkHistoryServerConfig(GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `ResetMetastoreService` <a name="ResetMetastoreService" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```csharp
private void ResetMetastoreService()
```

##### `ResetSparkHistoryServerConfig` <a name="ResetSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```csharp
private void ResetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">MetastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">SparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">MetastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SparkHistoryServerConfig`<sup>Required</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference SparkHistoryServerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `MetastoreServiceInput`<sup>Optional</sup> <a name="MetastoreServiceInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```csharp
public string MetastoreServiceInput { get; }
```

- *Type:* string

---

##### `SparkHistoryServerConfigInput`<sup>Optional</sup> <a name="SparkHistoryServerConfigInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `MetastoreService`<sup>Required</sup> <a name="MetastoreService" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```csharp
public string MetastoreService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---


### GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">ResetDataprocCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocCluster` <a name="ResetDataprocCluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```csharp
private void ResetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">DataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataprocClusterInput`<sup>Optional</sup> <a name="DataprocClusterInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```csharp
public string DataprocClusterInput { get; }
```

- *Type:* string

---

##### `DataprocCluster`<sup>Required</sup> <a name="DataprocCluster" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### GoogleDataprocSessionTemplateJupyterSessionOutputReference <a name="GoogleDataprocSessionTemplateJupyterSessionOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateJupyterSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetKernel">ResetKernel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetKernel` <a name="ResetKernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.resetKernel"></a>

```csharp
private void ResetKernel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput">KernelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernel">Kernel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `KernelInput`<sup>Optional</sup> <a name="KernelInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput"></a>

```csharp
public string KernelInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Kernel`<sup>Required</sup> <a name="Kernel" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.kernel"></a>

```csharp
public string Kernel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSessionOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateJupyterSession InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateJupyterSession">GoogleDataprocSessionTemplateJupyterSession</a>

---


### GoogleDataprocSessionTemplateRuntimeConfigOutputReference <a name="GoogleDataprocSessionTemplateRuntimeConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties">EffectiveProperties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage">ContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveProperties`<sup>Required</sup> <a name="EffectiveProperties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties"></a>

```csharp
public StringMap EffectiveProperties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput"></a>

```csharp
public string ContainerImageInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage"></a>

```csharp
public string ContainerImage { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateRuntimeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateRuntimeConfig">GoogleDataprocSessionTemplateRuntimeConfig</a>

---


### GoogleDataprocSessionTemplateSparkConnectSessionOutputReference <a name="GoogleDataprocSessionTemplateSparkConnectSessionOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateSparkConnectSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocSessionTemplateSparkConnectSession InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateSparkConnectSession">GoogleDataprocSessionTemplateSparkConnectSession</a>

---


### GoogleDataprocSessionTemplateTimeoutsOutputReference <a name="GoogleDataprocSessionTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocSessionTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocSessionTemplate.GoogleDataprocSessionTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



