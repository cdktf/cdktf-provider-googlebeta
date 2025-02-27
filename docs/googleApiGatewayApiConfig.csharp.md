# `googleApiGatewayApiConfig` Submodule <a name="`googleApiGatewayApiConfig` Submodule" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayApiConfigA <a name="GoogleApiGatewayApiConfigA" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config google_api_gateway_api_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigA(Construct Scope, string Id, GoogleApiGatewayApiConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig">GoogleApiGatewayApiConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig">GoogleApiGatewayApiConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig">PutGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices">PutGrpcServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs">PutManagedServiceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments">PutOpenapiDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId">ResetApiConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix">ResetApiConfigIdPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig">ResetGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices">ResetGrpcServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs">ResetManagedServiceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments">ResetOpenapiDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGatewayConfig` <a name="PutGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig"></a>

```csharp
private void PutGatewayConfig(GoogleApiGatewayApiConfigGatewayConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGatewayConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `PutGrpcServices` <a name="PutGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices"></a>

```csharp
private void PutGrpcServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putGrpcServices.parameter.value"></a>

- *Type:* object

---

##### `PutManagedServiceConfigs` <a name="PutManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs"></a>

```csharp
private void PutManagedServiceConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putManagedServiceConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutOpenapiDocuments` <a name="PutOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments"></a>

```csharp
private void PutOpenapiDocuments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putOpenapiDocuments.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApiGatewayApiConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

---

##### `ResetApiConfigId` <a name="ResetApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigId"></a>

```csharp
private void ResetApiConfigId()
```

##### `ResetApiConfigIdPrefix` <a name="ResetApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetApiConfigIdPrefix"></a>

```csharp
private void ResetApiConfigIdPrefix()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGatewayConfig` <a name="ResetGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGatewayConfig"></a>

```csharp
private void ResetGatewayConfig()
```

##### `ResetGrpcServices` <a name="ResetGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetGrpcServices"></a>

```csharp
private void ResetGrpcServices()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetManagedServiceConfigs` <a name="ResetManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetManagedServiceConfigs"></a>

```csharp
private void ResetManagedServiceConfigs()
```

##### `ResetOpenapiDocuments` <a name="ResetOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetOpenapiDocuments"></a>

```csharp
private void ResetOpenapiDocuments()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApiGatewayApiConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApiGatewayApiConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApiGatewayApiConfigA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApiGatewayApiConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApiGatewayApiConfigA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApiGatewayApiConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApiGatewayApiConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayApiConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices">GrpcServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs">ManagedServiceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments">OpenapiDocuments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId">ServiceConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput">ApiConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput">ApiConfigIdPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput">GatewayConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput">GrpcServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput">ManagedServiceConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput">OpenapiDocumentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId">ApiConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix">ApiConfigIdPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GatewayConfig`<sup>Required</sup> <a name="GatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfig"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfigOutputReference GatewayConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigOutputReference</a>

---

##### `GrpcServices`<sup>Required</sup> <a name="GrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServices"></a>

```csharp
public GoogleApiGatewayApiConfigGrpcServicesList GrpcServices { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList">GoogleApiGatewayApiConfigGrpcServicesList</a>

---

##### `ManagedServiceConfigs`<sup>Required</sup> <a name="ManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigs"></a>

```csharp
public GoogleApiGatewayApiConfigManagedServiceConfigsList ManagedServiceConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList">GoogleApiGatewayApiConfigManagedServiceConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenapiDocuments`<sup>Required</sup> <a name="OpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocuments"></a>

```csharp
public GoogleApiGatewayApiConfigOpenapiDocumentsList OpenapiDocuments { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList">GoogleApiGatewayApiConfigOpenapiDocumentsList</a>

---

##### `ServiceConfigId`<sup>Required</sup> <a name="ServiceConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.serviceConfigId"></a>

```csharp
public string ServiceConfigId { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeouts"></a>

```csharp
public GoogleApiGatewayApiConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference">GoogleApiGatewayApiConfigTimeoutsOutputReference</a>

---

##### `ApiConfigIdInput`<sup>Optional</sup> <a name="ApiConfigIdInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdInput"></a>

```csharp
public string ApiConfigIdInput { get; }
```

- *Type:* string

---

##### `ApiConfigIdPrefixInput`<sup>Optional</sup> <a name="ApiConfigIdPrefixInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefixInput"></a>

```csharp
public string ApiConfigIdPrefixInput { get; }
```

- *Type:* string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GatewayConfigInput`<sup>Optional</sup> <a name="GatewayConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.gatewayConfigInput"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfig GatewayConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---

##### `GrpcServicesInput`<sup>Optional</sup> <a name="GrpcServicesInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.grpcServicesInput"></a>

```csharp
public object GrpcServicesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ManagedServiceConfigsInput`<sup>Optional</sup> <a name="ManagedServiceConfigsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.managedServiceConfigsInput"></a>

```csharp
public object ManagedServiceConfigsInput { get; }
```

- *Type:* object

---

##### `OpenapiDocumentsInput`<sup>Optional</sup> <a name="OpenapiDocumentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.openapiDocumentsInput"></a>

```csharp
public object OpenapiDocumentsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `ApiConfigId`<sup>Required</sup> <a name="ApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigId"></a>

```csharp
public string ApiConfigId { get; }
```

- *Type:* string

---

##### `ApiConfigIdPrefix`<sup>Required</sup> <a name="ApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.apiConfigIdPrefix"></a>

```csharp
public string ApiConfigIdPrefix { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayApiConfigAConfig <a name="GoogleApiGatewayApiConfigAConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Api,
    string ApiConfigId = null,
    string ApiConfigIdPrefix = null,
    string DisplayName = null,
    GoogleApiGatewayApiConfigGatewayConfig GatewayConfig = null,
    object GrpcServices = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object ManagedServiceConfigs = null,
    object OpenapiDocuments = null,
    string Project = null,
    GoogleApiGatewayApiConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api">Api</a></code> | <code>string</code> | The API to attach the config to. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId">ApiConfigId</a></code> | <code>string</code> | Identifier to assign to the API Config. Must be unique within scope of the parent resource(api). |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix">ApiConfigIdPrefix</a></code> | <code>string</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A user-visible name for the API. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig">GatewayConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | gateway_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices">GrpcServices</a></code> | <code>object</code> | grpc_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs">ManagedServiceConfigs</a></code> | <code>object</code> | managed_service_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments">OpenapiDocuments</a></code> | <code>object</code> | openapi_documents block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

The API to attach the config to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api GoogleApiGatewayApiConfigA#api}

---

##### `ApiConfigId`<sup>Optional</sup> <a name="ApiConfigId" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigId"></a>

```csharp
public string ApiConfigId { get; set; }
```

- *Type:* string

Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api_config_id GoogleApiGatewayApiConfigA#api_config_id}

---

##### `ApiConfigIdPrefix`<sup>Optional</sup> <a name="ApiConfigIdPrefix" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.apiConfigIdPrefix"></a>

```csharp
public string ApiConfigIdPrefix { get; set; }
```

- *Type:* string

Creates a unique name beginning with the specified prefix.

If this and api_config_id are unspecified, a random value is chosen for the name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#api_config_id_prefix GoogleApiGatewayApiConfigA#api_config_id_prefix}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#display_name GoogleApiGatewayApiConfigA#display_name}

---

##### `GatewayConfig`<sup>Optional</sup> <a name="GatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.gatewayConfig"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfig GatewayConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

gateway_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#gateway_config GoogleApiGatewayApiConfigA#gateway_config}

---

##### `GrpcServices`<sup>Optional</sup> <a name="GrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.grpcServices"></a>

```csharp
public object GrpcServices { get; set; }
```

- *Type:* object

grpc_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#grpc_services GoogleApiGatewayApiConfigA#grpc_services}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#id GoogleApiGatewayApiConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#labels GoogleApiGatewayApiConfigA#labels}

---

##### `ManagedServiceConfigs`<sup>Optional</sup> <a name="ManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.managedServiceConfigs"></a>

```csharp
public object ManagedServiceConfigs { get; set; }
```

- *Type:* object

managed_service_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#managed_service_configs GoogleApiGatewayApiConfigA#managed_service_configs}

---

##### `OpenapiDocuments`<sup>Optional</sup> <a name="OpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.openapiDocuments"></a>

```csharp
public object OpenapiDocuments { get; set; }
```

- *Type:* object

openapi_documents block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#openapi_documents GoogleApiGatewayApiConfigA#openapi_documents}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#project GoogleApiGatewayApiConfigA#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigAConfig.property.timeouts"></a>

```csharp
public GoogleApiGatewayApiConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts">GoogleApiGatewayApiConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#timeouts GoogleApiGatewayApiConfigA#timeouts}

---

### GoogleApiGatewayApiConfigGatewayConfig <a name="GoogleApiGatewayApiConfigGatewayConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGatewayConfig {
    GoogleApiGatewayApiConfigGatewayConfigBackendConfig BackendConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig">BackendConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | backend_config block. |

---

##### `BackendConfig`<sup>Required</sup> <a name="BackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig.property.backendConfig"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfigBackendConfig BackendConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#backend_config GoogleApiGatewayApiConfigA#backend_config}

---

### GoogleApiGatewayApiConfigGatewayConfigBackendConfig <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGatewayConfigBackendConfig {
    string GoogleServiceAccount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). |

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; set; }
```

- *Type:* string

Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#google_service_account GoogleApiGatewayApiConfigA#google_service_account}

---

### GoogleApiGatewayApiConfigGrpcServices <a name="GoogleApiGatewayApiConfigGrpcServices" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServices {
    GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet FileDescriptorSet,
    object Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet">FileDescriptorSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | file_descriptor_set block. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source">Source</a></code> | <code>object</code> | source block. |

---

##### `FileDescriptorSet`<sup>Required</sup> <a name="FileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.fileDescriptorSet"></a>

```csharp
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet FileDescriptorSet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

file_descriptor_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#file_descriptor_set GoogleApiGatewayApiConfigA#file_descriptor_set}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServices.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#source GoogleApiGatewayApiConfigA#source}

---

### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet {
    string Contents,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents">Contents</a></code> | <code>string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path">Path</a></code> | <code>string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.contents"></a>

```csharp
public string Contents { get; set; }
```

- *Type:* string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigGrpcServicesSource <a name="GoogleApiGatewayApiConfigGrpcServicesSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesSource {
    string Contents,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents">Contents</a></code> | <code>string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path">Path</a></code> | <code>string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.contents"></a>

```csharp
public string Contents { get; set; }
```

- *Type:* string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigManagedServiceConfigs <a name="GoogleApiGatewayApiConfigManagedServiceConfigs" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigManagedServiceConfigs {
    string Contents,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents">Contents</a></code> | <code>string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path">Path</a></code> | <code>string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.contents"></a>

```csharp
public string Contents { get; set; }
```

- *Type:* string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigOpenapiDocuments <a name="GoogleApiGatewayApiConfigOpenapiDocuments" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigOpenapiDocuments {
    GoogleApiGatewayApiConfigOpenapiDocumentsDocument Document
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document">Document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | document block. |

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocuments.property.document"></a>

```csharp
public GoogleApiGatewayApiConfigOpenapiDocumentsDocument Document { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#document GoogleApiGatewayApiConfigA#document}

---

### GoogleApiGatewayApiConfigOpenapiDocumentsDocument <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigOpenapiDocumentsDocument {
    string Contents,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents">Contents</a></code> | <code>string</code> | Base64 encoded content of the file. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path">Path</a></code> | <code>string</code> | The file path (full or relative path). This is typically the path of the file when it is uploaded. |

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.contents"></a>

```csharp
public string Contents { get; set; }
```

- *Type:* string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#contents GoogleApiGatewayApiConfigA#contents}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The file path (full or relative path). This is typically the path of the file when it is uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#path GoogleApiGatewayApiConfigA#path}

---

### GoogleApiGatewayApiConfigTimeouts <a name="GoogleApiGatewayApiConfigTimeouts" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#create GoogleApiGatewayApiConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#delete GoogleApiGatewayApiConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_api_gateway_api_config#update GoogleApiGatewayApiConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccountInput"></a>

```csharp
public string GoogleServiceAccountInput { get; }
```

- *Type:* string

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfigBackendConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


### GoogleApiGatewayApiConfigGatewayConfigOutputReference <a name="GoogleApiGatewayApiConfigGatewayConfigOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGatewayConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig">PutBackendConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendConfig` <a name="PutBackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig"></a>

```csharp
private void PutBackendConfig(GoogleApiGatewayApiConfigGatewayConfigBackendConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.putBackendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig">BackendConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput">BackendConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendConfig`<sup>Required</sup> <a name="BackendConfig" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfig"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference BackendConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference">GoogleApiGatewayApiConfigGatewayConfigBackendConfigOutputReference</a>

---

##### `BackendConfigInput`<sup>Optional</sup> <a name="BackendConfigInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.backendConfigInput"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfigBackendConfig BackendConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigBackendConfig">GoogleApiGatewayApiConfigGatewayConfigBackendConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleApiGatewayApiConfigGatewayConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGatewayConfig">GoogleApiGatewayApiConfigGatewayConfig</a>

---


### GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contentsInput"></a>

```csharp
public string ContentsInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference.property.internalValue"></a>

```csharp
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---


### GoogleApiGatewayApiConfigGrpcServicesList <a name="GoogleApiGatewayApiConfigGrpcServicesList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get"></a>

```csharp
private GoogleApiGatewayApiConfigGrpcServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigGrpcServicesOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet">PutFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileDescriptorSet` <a name="PutFileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet"></a>

```csharp
private void PutFileDescriptorSet(GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putFileDescriptorSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.putSource.parameter.value"></a>

- *Type:* object

---

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet">FileDescriptorSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput">FileDescriptorSetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileDescriptorSet`<sup>Required</sup> <a name="FileDescriptorSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSet"></a>

```csharp
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference FileDescriptorSet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSetOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.source"></a>

```csharp
public GoogleApiGatewayApiConfigGrpcServicesSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList">GoogleApiGatewayApiConfigGrpcServicesSourceList</a>

---

##### `FileDescriptorSetInput`<sup>Optional</sup> <a name="FileDescriptorSetInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.fileDescriptorSetInput"></a>

```csharp
public GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet FileDescriptorSetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet">GoogleApiGatewayApiConfigGrpcServicesFileDescriptorSet</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigGrpcServicesSourceList <a name="GoogleApiGatewayApiConfigGrpcServicesSourceList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get"></a>

```csharp
private GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference <a name="GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contentsInput"></a>

```csharp
public string ContentsInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigGrpcServicesSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigManagedServiceConfigsList <a name="GoogleApiGatewayApiConfigManagedServiceConfigsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigManagedServiceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get"></a>

```csharp
private GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference <a name="GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contentsInput"></a>

```csharp
public string ContentsInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigManagedServiceConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput">ContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents">Contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentsInput`<sup>Optional</sup> <a name="ContentsInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contentsInput"></a>

```csharp
public string ContentsInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.contents"></a>

```csharp
public string Contents { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference.property.internalValue"></a>

```csharp
public GoogleApiGatewayApiConfigOpenapiDocumentsDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


### GoogleApiGatewayApiConfigOpenapiDocumentsList <a name="GoogleApiGatewayApiConfigOpenapiDocumentsList" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigOpenapiDocumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get"></a>

```csharp
private GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference <a name="GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument">PutDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocument` <a name="PutDocument" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument"></a>

```csharp
private void PutDocument(GoogleApiGatewayApiConfigOpenapiDocumentsDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.putDocument.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document">Document</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput">DocumentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.document"></a>

```csharp
public GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference Document { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference">GoogleApiGatewayApiConfigOpenapiDocumentsDocumentOutputReference</a>

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.documentInput"></a>

```csharp
public GoogleApiGatewayApiConfigOpenapiDocumentsDocument DocumentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsDocument">GoogleApiGatewayApiConfigOpenapiDocumentsDocument</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigOpenapiDocumentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApiGatewayApiConfigTimeoutsOutputReference <a name="GoogleApiGatewayApiConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApiGatewayApiConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApiGatewayApiConfig.GoogleApiGatewayApiConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



