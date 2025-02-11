# `googleContainerAttachedCluster` Submodule <a name="`googleContainerAttachedCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAttachedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAttachedCluster <a name="GoogleContainerAttachedCluster" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster google_container_attached_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedCluster(Construct Scope, string Id, GoogleContainerAttachedClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig">GoogleContainerAttachedClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig">GoogleContainerAttachedClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig">PutMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig">PutOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig">PutSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetMonitoringConfig">ResetMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetSecurityPostureConfig">ResetSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(GoogleContainerAttachedClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization"></a>

```csharp
private void PutBinaryAuthorization(GoogleContainerAttachedClusterBinaryAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet"></a>

```csharp
private void PutFleet(GoogleContainerAttachedClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(GoogleContainerAttachedClusterLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---

##### `PutMonitoringConfig` <a name="PutMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig"></a>

```csharp
private void PutMonitoringConfig(GoogleContainerAttachedClusterMonitoringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---

##### `PutOidcConfig` <a name="PutOidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig"></a>

```csharp
private void PutOidcConfig(GoogleContainerAttachedClusterOidcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig"></a>

```csharp
private void PutProxyConfig(GoogleContainerAttachedClusterProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---

##### `PutSecurityPostureConfig` <a name="PutSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig"></a>

```csharp
private void PutSecurityPostureConfig(GoogleContainerAttachedClusterSecurityPostureConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContainerAttachedClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetBinaryAuthorization"></a>

```csharp
private void ResetBinaryAuthorization()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMonitoringConfig` <a name="ResetMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetMonitoringConfig"></a>

```csharp
private void ResetMonitoringConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetSecurityPostureConfig` <a name="ResetSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetSecurityPostureConfig"></a>

```csharp
private void ResetSecurityPostureConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAttachedCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAttachedCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAttachedCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAttachedCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAttachedCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAttachedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAttachedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference">GoogleContainerAttachedClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference">GoogleContainerAttachedClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.clusterRegion">ClusterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.errors">Errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList">GoogleContainerAttachedClusterErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference">GoogleContainerAttachedClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfig">MonitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfig">OidcConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference">GoogleContainerAttachedClusterOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference">GoogleContainerAttachedClusterProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfig">SecurityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference">GoogleContainerAttachedClusterSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference">GoogleContainerAttachedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.workloadIdentityConfig">WorkloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList">GoogleContainerAttachedClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distributionInput">DistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfigInput">MonitoringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfigInput">OidcConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersionInput">PlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfigInput">SecurityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distribution">Distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorization"></a>

```csharp
public GoogleContainerAttachedClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference">GoogleContainerAttachedClusterAuthorizationOutputReference</a>

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorization"></a>

```csharp
public GoogleContainerAttachedClusterBinaryAuthorizationOutputReference BinaryAuthorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference">GoogleContainerAttachedClusterBinaryAuthorizationOutputReference</a>

---

##### `ClusterRegion`<sup>Required</sup> <a name="ClusterRegion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.clusterRegion"></a>

```csharp
public string ClusterRegion { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.errors"></a>

```csharp
public GoogleContainerAttachedClusterErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList">GoogleContainerAttachedClusterErrorsList</a>

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleet"></a>

```csharp
public GoogleContainerAttachedClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference">GoogleContainerAttachedClusterFleetOutputReference</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfig"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigOutputReference</a>

---

##### `MonitoringConfig`<sup>Required</sup> <a name="MonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfig"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfigOutputReference MonitoringConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigOutputReference</a>

---

##### `OidcConfig`<sup>Required</sup> <a name="OidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfig"></a>

```csharp
public GoogleContainerAttachedClusterOidcConfigOutputReference OidcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference">GoogleContainerAttachedClusterOidcConfigOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfig"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference">GoogleContainerAttachedClusterProxyConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SecurityPostureConfig`<sup>Required</sup> <a name="SecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfig"></a>

```csharp
public GoogleContainerAttachedClusterSecurityPostureConfigOutputReference SecurityPostureConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference">GoogleContainerAttachedClusterSecurityPostureConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeouts"></a>

```csharp
public GoogleContainerAttachedClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference">GoogleContainerAttachedClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkloadIdentityConfig`<sup>Required</sup> <a name="WorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.workloadIdentityConfig"></a>

```csharp
public GoogleContainerAttachedClusterWorkloadIdentityConfigList WorkloadIdentityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList">GoogleContainerAttachedClusterWorkloadIdentityConfigList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorizationInput"></a>

```csharp
public GoogleContainerAttachedClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorizationInput"></a>

```csharp
public GoogleContainerAttachedClusterBinaryAuthorization BinaryAuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distributionInput"></a>

```csharp
public string DistributionInput { get; }
```

- *Type:* string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleetInput"></a>

```csharp
public GoogleContainerAttachedClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---

##### `MonitoringConfigInput`<sup>Optional</sup> <a name="MonitoringConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfig MonitoringConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OidcConfigInput`<sup>Optional</sup> <a name="OidcConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterOidcConfig OidcConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersionInput"></a>

```csharp
public string PlatformVersionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---

##### `SecurityPostureConfigInput`<sup>Optional</sup> <a name="SecurityPostureConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterSecurityPostureConfig SecurityPostureConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distribution"></a>

```csharp
public string Distribution { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAttachedClusterAuthorization <a name="GoogleContainerAttachedClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterAuthorization {
    string[] AdminGroups = null,
    string[] AdminUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminGroups">AdminGroups</a></code> | <code>string[]</code> | Groups that can perform operations as a cluster admin. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>string[]</code> | Users that can perform operations as a cluster admin. |

---

##### `AdminGroups`<sup>Optional</sup> <a name="AdminGroups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminGroups"></a>

```csharp
public string[] AdminGroups { get; set; }
```

- *Type:* string[]

Groups that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the groups. Up to ten admin groups can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#admin_groups GoogleContainerAttachedCluster#admin_groups}

---

##### `AdminUsers`<sup>Optional</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminUsers"></a>

```csharp
public string[] AdminUsers { get; set; }
```

- *Type:* string[]

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#admin_users GoogleContainerAttachedCluster#admin_users}

---

### GoogleContainerAttachedClusterBinaryAuthorization <a name="GoogleContainerAttachedClusterBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterBinaryAuthorization {
    string EvaluationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. |

---

##### `EvaluationMode`<sup>Optional</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; set; }
```

- *Type:* string

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#evaluation_mode GoogleContainerAttachedCluster#evaluation_mode}

---

### GoogleContainerAttachedClusterConfig <a name="GoogleContainerAttachedClusterConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Distribution,
    GoogleContainerAttachedClusterFleet Fleet,
    string Location,
    string Name,
    GoogleContainerAttachedClusterOidcConfig OidcConfig,
    string PlatformVersion,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleContainerAttachedClusterAuthorization Authorization = null,
    GoogleContainerAttachedClusterBinaryAuthorization BinaryAuthorization = null,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    GoogleContainerAttachedClusterLoggingConfig LoggingConfig = null,
    GoogleContainerAttachedClusterMonitoringConfig MonitoringConfig = null,
    string Project = null,
    GoogleContainerAttachedClusterProxyConfig ProxyConfig = null,
    GoogleContainerAttachedClusterSecurityPostureConfig SecurityPostureConfig = null,
    GoogleContainerAttachedClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.distribution">Distribution</a></code> | <code>string</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.oidcConfig">OidcConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.description">Description</a></code> | <code>string</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.monitoringConfig">MonitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.securityPostureConfig">SecurityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.distribution"></a>

```csharp
public string Distribution { get; set; }
```

- *Type:* string

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#distribution GoogleContainerAttachedCluster#distribution}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.fleet"></a>

```csharp
public GoogleContainerAttachedClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#fleet GoogleContainerAttachedCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#location GoogleContainerAttachedCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `OidcConfig`<sup>Required</sup> <a name="OidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.oidcConfig"></a>

```csharp
public GoogleContainerAttachedClusterOidcConfig OidcConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#oidc_config GoogleContainerAttachedCluster#oidc_config}

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; set; }
```

- *Type:* string

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#platform_version GoogleContainerAttachedCluster#platform_version}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#annotations GoogleContainerAttachedCluster#annotations}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.authorization"></a>

```csharp
public GoogleContainerAttachedClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#authorization GoogleContainerAttachedCluster#authorization}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.binaryAuthorization"></a>

```csharp
public GoogleContainerAttachedClusterBinaryAuthorization BinaryAuthorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#binary_authorization GoogleContainerAttachedCluster#binary_authorization}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#deletion_policy GoogleContainerAttachedCluster#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#description GoogleContainerAttachedCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.loggingConfig"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#logging_config GoogleContainerAttachedCluster#logging_config}

---

##### `MonitoringConfig`<sup>Optional</sup> <a name="MonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.monitoringConfig"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfig MonitoringConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#monitoring_config GoogleContainerAttachedCluster#monitoring_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}.

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.proxyConfig"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#proxy_config GoogleContainerAttachedCluster#proxy_config}

---

##### `SecurityPostureConfig`<sup>Optional</sup> <a name="SecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.securityPostureConfig"></a>

```csharp
public GoogleContainerAttachedClusterSecurityPostureConfig SecurityPostureConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#security_posture_config GoogleContainerAttachedCluster#security_posture_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.timeouts"></a>

```csharp
public GoogleContainerAttachedClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#timeouts GoogleContainerAttachedCluster#timeouts}

---

### GoogleContainerAttachedClusterErrors <a name="GoogleContainerAttachedClusterErrors" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterErrors {

};
```


### GoogleContainerAttachedClusterFleet <a name="GoogleContainerAttachedClusterFleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterFleet {
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.property.project">Project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}

---

### GoogleContainerAttachedClusterLoggingConfig <a name="GoogleContainerAttachedClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterLoggingConfig {
    GoogleContainerAttachedClusterLoggingConfigComponentConfig ComponentConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.property.componentConfig">ComponentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `ComponentConfig`<sup>Optional</sup> <a name="ComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.property.componentConfig"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfigComponentConfig ComponentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#component_config GoogleContainerAttachedCluster#component_config}

---

### GoogleContainerAttachedClusterLoggingConfigComponentConfig <a name="GoogleContainerAttachedClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterLoggingConfigComponentConfig {
    string[] EnableComponents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents">EnableComponents</a></code> | <code>string[]</code> | The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. |

---

##### `EnableComponents`<sup>Optional</sup> <a name="EnableComponents" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```csharp
public string[] EnableComponents { get; set; }
```

- *Type:* string[]

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#enable_components GoogleContainerAttachedCluster#enable_components}

---

### GoogleContainerAttachedClusterMonitoringConfig <a name="GoogleContainerAttachedClusterMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterMonitoringConfig {
    GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig ManagedPrometheusConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig">ManagedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | managed_prometheus_config block. |

---

##### `ManagedPrometheusConfig`<sup>Optional</sup> <a name="ManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig ManagedPrometheusConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#managed_prometheus_config GoogleContainerAttachedCluster#managed_prometheus_config}

---

### GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig <a name="GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable Managed Collection. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#enabled GoogleContainerAttachedCluster#enabled}

---

### GoogleContainerAttachedClusterOidcConfig <a name="GoogleContainerAttachedClusterOidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterOidcConfig {
    string IssuerUrl,
    string Jwks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.jwks">Jwks</a></code> | <code>string</code> | OIDC verification keys in JWKS format (RFC 7517). |

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#issuer_url GoogleContainerAttachedCluster#issuer_url}

---

##### `Jwks`<sup>Optional</sup> <a name="Jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.jwks"></a>

```csharp
public string Jwks { get; set; }
```

- *Type:* string

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#jwks GoogleContainerAttachedCluster#jwks}

---

### GoogleContainerAttachedClusterProxyConfig <a name="GoogleContainerAttachedClusterProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterProxyConfig {
    GoogleContainerAttachedClusterProxyConfigKubernetesSecret KubernetesSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.property.kubernetesSecret">KubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | kubernetes_secret block. |

---

##### `KubernetesSecret`<sup>Optional</sup> <a name="KubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.property.kubernetesSecret"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfigKubernetesSecret KubernetesSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

kubernetes_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#kubernetes_secret GoogleContainerAttachedCluster#kubernetes_secret}

---

### GoogleContainerAttachedClusterProxyConfigKubernetesSecret <a name="GoogleContainerAttachedClusterProxyConfigKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterProxyConfigKubernetesSecret {
    string Name,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.name">Name</a></code> | <code>string</code> | Name of the kubernetes secret containing the proxy config. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace">Namespace</a></code> | <code>string</code> | Namespace of the kubernetes secret containing the proxy config. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#namespace GoogleContainerAttachedCluster#namespace}

---

### GoogleContainerAttachedClusterSecurityPostureConfig <a name="GoogleContainerAttachedClusterSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterSecurityPostureConfig {
    string VulnerabilityMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode">VulnerabilityMode</a></code> | <code>string</code> | Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"]. |

---

##### `VulnerabilityMode`<sup>Required</sup> <a name="VulnerabilityMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode"></a>

```csharp
public string VulnerabilityMode { get; set; }
```

- *Type:* string

Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#vulnerability_mode GoogleContainerAttachedCluster#vulnerability_mode}

---

### GoogleContainerAttachedClusterTimeouts <a name="GoogleContainerAttachedClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}.

---

### GoogleContainerAttachedClusterWorkloadIdentityConfig <a name="GoogleContainerAttachedClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterWorkloadIdentityConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAttachedClusterAuthorizationOutputReference <a name="GoogleContainerAttachedClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups">ResetAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers">ResetAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminGroups` <a name="ResetAdminGroups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups"></a>

```csharp
private void ResetAdminGroups()
```

##### `ResetAdminUsers` <a name="ResetAdminUsers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers"></a>

```csharp
private void ResetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput">AdminGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroups">AdminGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminGroupsInput`<sup>Optional</sup> <a name="AdminGroupsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```csharp
public string[] AdminGroupsInput { get; }
```

- *Type:* string[]

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public string[] AdminUsersInput { get; }
```

- *Type:* string[]

---

##### `AdminGroups`<sup>Required</sup> <a name="AdminGroups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroups"></a>

```csharp
public string[] AdminGroups { get; }
```

- *Type:* string[]

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public string[] AdminUsers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---


### GoogleContainerAttachedClusterBinaryAuthorizationOutputReference <a name="GoogleContainerAttachedClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterBinaryAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode">ResetEvaluationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluationMode` <a name="ResetEvaluationMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```csharp
private void ResetEvaluationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```csharp
public string EvaluationModeInput { get; }
```

- *Type:* string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterBinaryAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---


### GoogleContainerAttachedClusterErrorsList <a name="GoogleContainerAttachedClusterErrorsList" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get"></a>

```csharp
private GoogleContainerAttachedClusterErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleContainerAttachedClusterErrorsOutputReference <a name="GoogleContainerAttachedClusterErrorsOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors">GoogleContainerAttachedClusterErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors">GoogleContainerAttachedClusterErrors</a>

---


### GoogleContainerAttachedClusterFleetOutputReference <a name="GoogleContainerAttachedClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---


### GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">ResetEnableComponents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableComponents` <a name="ResetEnableComponents" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```csharp
private void ResetEnableComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">EnableComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">EnableComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableComponentsInput`<sup>Optional</sup> <a name="EnableComponentsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```csharp
public string[] EnableComponentsInput { get; }
```

- *Type:* string[]

---

##### `EnableComponents`<sup>Required</sup> <a name="EnableComponents" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```csharp
public string[] EnableComponents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfigComponentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAttachedClusterLoggingConfigOutputReference <a name="GoogleContainerAttachedClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig">PutComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig">ResetComponentConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponentConfig` <a name="PutComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig"></a>

```csharp
private void PutComponentConfig(GoogleContainerAttachedClusterLoggingConfigComponentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `ResetComponentConfig` <a name="ResetComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```csharp
private void ResetComponentConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig">ComponentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput">ComponentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentConfig`<sup>Required</sup> <a name="ComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference ComponentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `ComponentConfigInput`<sup>Optional</sup> <a name="ComponentConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfigComponentConfig ComponentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---


### GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference <a name="GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---


### GoogleContainerAttachedClusterMonitoringConfigOutputReference <a name="GoogleContainerAttachedClusterMonitoringConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig">PutManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig">ResetManagedPrometheusConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedPrometheusConfig` <a name="PutManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig"></a>

```csharp
private void PutManagedPrometheusConfig(GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `ResetManagedPrometheusConfig` <a name="ResetManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig"></a>

```csharp
private void ResetManagedPrometheusConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig">ManagedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput">ManagedPrometheusConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedPrometheusConfig`<sup>Required</sup> <a name="ManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference ManagedPrometheusConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a>

---

##### `ManagedPrometheusConfigInput`<sup>Optional</sup> <a name="ManagedPrometheusConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig ManagedPrometheusConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterMonitoringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---


### GoogleContainerAttachedClusterOidcConfigOutputReference <a name="GoogleContainerAttachedClusterOidcConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterOidcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resetJwks">ResetJwks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJwks` <a name="ResetJwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resetJwks"></a>

```csharp
private void ResetJwks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwksInput">JwksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwks">Jwks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `JwksInput`<sup>Optional</sup> <a name="JwksInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwksInput"></a>

```csharp
public string JwksInput { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `Jwks`<sup>Required</sup> <a name="Jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwks"></a>

```csharp
public string Jwks { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterOidcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---


### GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference <a name="GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfigKubernetesSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---


### GoogleContainerAttachedClusterProxyConfigOutputReference <a name="GoogleContainerAttachedClusterProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret">PutKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret">ResetKubernetesSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetesSecret` <a name="PutKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret"></a>

```csharp
private void PutKubernetesSecret(GoogleContainerAttachedClusterProxyConfigKubernetesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `ResetKubernetesSecret` <a name="ResetKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret"></a>

```csharp
private void ResetKubernetesSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret">KubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput">KubernetesSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KubernetesSecret`<sup>Required</sup> <a name="KubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference KubernetesSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a>

---

##### `KubernetesSecretInput`<sup>Optional</sup> <a name="KubernetesSecretInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfigKubernetesSecret KubernetesSecretInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---


### GoogleContainerAttachedClusterSecurityPostureConfigOutputReference <a name="GoogleContainerAttachedClusterSecurityPostureConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterSecurityPostureConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">VulnerabilityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode">VulnerabilityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VulnerabilityModeInput`<sup>Optional</sup> <a name="VulnerabilityModeInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```csharp
public string VulnerabilityModeInput { get; }
```

- *Type:* string

---

##### `VulnerabilityMode`<sup>Required</sup> <a name="VulnerabilityMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```csharp
public string VulnerabilityMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterSecurityPostureConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---


### GoogleContainerAttachedClusterTimeoutsOutputReference <a name="GoogleContainerAttachedClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAttachedClusterWorkloadIdentityConfigList <a name="GoogleContainerAttachedClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterWorkloadIdentityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get"></a>

```csharp
private GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool">WorkloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig">GoogleContainerAttachedClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `WorkloadPool`<sup>Required</sup> <a name="WorkloadPool" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```csharp
public string WorkloadPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAttachedClusterWorkloadIdentityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig">GoogleContainerAttachedClusterWorkloadIdentityConfig</a>

---



