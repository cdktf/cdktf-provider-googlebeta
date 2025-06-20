# `googleContainerAzureCluster` Submodule <a name="`googleContainerAzureCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAzureCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAzureCluster <a name="GoogleContainerAzureCluster" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster google_container_azure_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureCluster(Construct Scope, string Id, GoogleContainerAzureClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig">GoogleContainerAzureClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig">GoogleContainerAzureClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAzureServicesAuthentication">PutAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAzureServicesAuthentication">ResetAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(GoogleContainerAzureClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

---

##### `PutAzureServicesAuthentication` <a name="PutAzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAzureServicesAuthentication"></a>

```csharp
private void PutAzureServicesAuthentication(GoogleContainerAzureClusterAzureServicesAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putAzureServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putControlPlane"></a>

```csharp
private void PutControlPlane(GoogleContainerAzureClusterControlPlane Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putFleet"></a>

```csharp
private void PutFleet(GoogleContainerAzureClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(GoogleContainerAzureClusterLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putNetworking"></a>

```csharp
private void PutNetworking(GoogleContainerAzureClusterNetworking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContainerAzureClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAzureServicesAuthentication` <a name="ResetAzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetAzureServicesAuthentication"></a>

```csharp
private void ResetAzureServicesAuthentication()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAzureCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleContainerAzureCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleContainerAzureCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAzureCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAzureCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAzureCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference">GoogleContainerAzureClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthentication">AzureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference">GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference">GoogleContainerAzureClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference">GoogleContainerAzureClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference">GoogleContainerAzureClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference">GoogleContainerAzureClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference">GoogleContainerAzureClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.workloadIdentityConfig">WorkloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList">GoogleContainerAzureClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegionInput">AzureRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthenticationInput">AzureServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.clientInput">ClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegion">AzureRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.client">Client</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorization"></a>

```csharp
public GoogleContainerAzureClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference">GoogleContainerAzureClusterAuthorizationOutputReference</a>

---

##### `AzureServicesAuthentication`<sup>Required</sup> <a name="AzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthentication"></a>

```csharp
public GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference AzureServicesAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference">GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference</a>

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlane"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneOutputReference ControlPlane { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference">GoogleContainerAzureClusterControlPlaneOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleet"></a>

```csharp
public GoogleContainerAzureClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference">GoogleContainerAzureClusterFleetOutputReference</a>

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfig"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference">GoogleContainerAzureClusterLoggingConfigOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networking"></a>

```csharp
public GoogleContainerAzureClusterNetworkingOutputReference Networking { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference">GoogleContainerAzureClusterNetworkingOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeouts"></a>

```csharp
public GoogleContainerAzureClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference">GoogleContainerAzureClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkloadIdentityConfig`<sup>Required</sup> <a name="WorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.workloadIdentityConfig"></a>

```csharp
public GoogleContainerAzureClusterWorkloadIdentityConfigList WorkloadIdentityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList">GoogleContainerAzureClusterWorkloadIdentityConfigList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.authorizationInput"></a>

```csharp
public GoogleContainerAzureClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

---

##### `AzureRegionInput`<sup>Optional</sup> <a name="AzureRegionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegionInput"></a>

```csharp
public string AzureRegionInput { get; }
```

- *Type:* string

---

##### `AzureServicesAuthenticationInput`<sup>Optional</sup> <a name="AzureServicesAuthenticationInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureServicesAuthenticationInput"></a>

```csharp
public GoogleContainerAzureClusterAzureServicesAuthentication AzureServicesAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.clientInput"></a>

```csharp
public string ClientInput { get; }
```

- *Type:* string

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.controlPlaneInput"></a>

```csharp
public GoogleContainerAzureClusterControlPlane ControlPlaneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.fleetInput"></a>

```csharp
public GoogleContainerAzureClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.loggingConfigInput"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.networkingInput"></a>

```csharp
public GoogleContainerAzureClusterNetworking NetworkingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AzureRegion`<sup>Required</sup> <a name="AzureRegion" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.azureRegion"></a>

```csharp
public string AzureRegion { get; }
```

- *Type:* string

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.client"></a>

```csharp
public string Client { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAzureClusterAuthorization <a name="GoogleContainerAzureClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorization {
    object AdminUsers,
    object AdminGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code>object</code> | admin_users block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminGroups">AdminGroups</a></code> | <code>object</code> | admin_groups block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminUsers"></a>

```csharp
public object AdminUsers { get; set; }
```

- *Type:* object

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#admin_users GoogleContainerAzureCluster#admin_users}

---

##### `AdminGroups`<sup>Optional</sup> <a name="AdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization.property.adminGroups"></a>

```csharp
public object AdminGroups { get; set; }
```

- *Type:* object

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#admin_groups GoogleContainerAzureCluster#admin_groups}

---

### GoogleContainerAzureClusterAuthorizationAdminGroups <a name="GoogleContainerAzureClusterAuthorizationAdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationAdminGroups {
    string Group
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups.property.group">Group</a></code> | <code>string</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroups.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#group GoogleContainerAzureCluster#group}

---

### GoogleContainerAzureClusterAuthorizationAdminUsers <a name="GoogleContainerAzureClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationAdminUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>string</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#username GoogleContainerAzureCluster#username}

---

### GoogleContainerAzureClusterAzureServicesAuthentication <a name="GoogleContainerAzureClusterAzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAzureServicesAuthentication {
    string ApplicationId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.applicationId">ApplicationId</a></code> | <code>string</code> | The Azure Active Directory Application ID for Authentication configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.tenantId">TenantId</a></code> | <code>string</code> | The Azure Active Directory Tenant ID for Authentication configuration. |

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The Azure Active Directory Application ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#application_id GoogleContainerAzureCluster#application_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The Azure Active Directory Tenant ID for Authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#tenant_id GoogleContainerAzureCluster#tenant_id}

---

### GoogleContainerAzureClusterConfig <a name="GoogleContainerAzureClusterConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleContainerAzureClusterAuthorization Authorization,
    string AzureRegion,
    GoogleContainerAzureClusterControlPlane ControlPlane,
    GoogleContainerAzureClusterFleet Fleet,
    string Location,
    string Name,
    GoogleContainerAzureClusterNetworking Networking,
    string ResourceGroupId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleContainerAzureClusterAzureServicesAuthentication AzureServicesAuthentication = null,
    string Client = null,
    string Description = null,
    string Id = null,
    GoogleContainerAzureClusterLoggingConfig LoggingConfig = null,
    string Project = null,
    GoogleContainerAzureClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureRegion">AzureRegion</a></code> | <code>string</code> | The Azure region where the cluster runs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureServicesAuthentication">AzureServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | azure_services_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.client">Client</a></code> | <code>string</code> | Name of the AzureClient. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.description">Description</a></code> | <code>string</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.authorization"></a>

```csharp
public GoogleContainerAzureClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#authorization GoogleContainerAzureCluster#authorization}

---

##### `AzureRegion`<sup>Required</sup> <a name="AzureRegion" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureRegion"></a>

```csharp
public string AzureRegion { get; set; }
```

- *Type:* string

The Azure region where the cluster runs.

Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#azure_region GoogleContainerAzureCluster#azure_region}

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.controlPlane"></a>

```csharp
public GoogleContainerAzureClusterControlPlane ControlPlane { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#control_plane GoogleContainerAzureCluster#control_plane}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.fleet"></a>

```csharp
public GoogleContainerAzureClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#fleet GoogleContainerAzureCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#location GoogleContainerAzureCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#name GoogleContainerAzureCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.networking"></a>

```csharp
public GoogleContainerAzureClusterNetworking Networking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#networking GoogleContainerAzureCluster#networking}

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/* /resourceGroups/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#annotations GoogleContainerAzureCluster#annotations}

---

##### `AzureServicesAuthentication`<sup>Optional</sup> <a name="AzureServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.azureServicesAuthentication"></a>

```csharp
public GoogleContainerAzureClusterAzureServicesAuthentication AzureServicesAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

azure_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#azure_services_authentication GoogleContainerAzureCluster#azure_services_authentication}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.client"></a>

```csharp
public string Client { get; set; }
```

- *Type:* string

Name of the AzureClient.

The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#client GoogleContainerAzureCluster#client}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#description GoogleContainerAzureCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#id GoogleContainerAzureCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.loggingConfig"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#logging_config GoogleContainerAzureCluster#logging_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterConfig.property.timeouts"></a>

```csharp
public GoogleContainerAzureClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts">GoogleContainerAzureClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#timeouts GoogleContainerAzureCluster#timeouts}

---

### GoogleContainerAzureClusterControlPlane <a name="GoogleContainerAzureClusterControlPlane" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlane {
    GoogleContainerAzureClusterControlPlaneSshConfig SshConfig,
    string SubnetId,
    string Version,
    GoogleContainerAzureClusterControlPlaneDatabaseEncryption DatabaseEncryption = null,
    GoogleContainerAzureClusterControlPlaneMainVolume MainVolume = null,
    GoogleContainerAzureClusterControlPlaneProxyConfig ProxyConfig = null,
    object ReplicaPlacements = null,
    GoogleContainerAzureClusterControlPlaneRootVolume RootVolume = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string VmSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.subnetId">SubnetId</a></code> | <code>string</code> | The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.version">Version</a></code> | <code>string</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.replicaPlacements">ReplicaPlacements</a></code> | <code>object</code> | replica_placements block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. A set of tags to apply to all underlying control plane Azure resources. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.vmSize">VmSize</a></code> | <code>string</code> | Optional. |

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.sshConfig"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneSshConfig SshConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#ssh_config GoogleContainerAzureCluster#ssh_config}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#subnet_id GoogleContainerAzureCluster#subnet_id}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#version GoogleContainerAzureCluster#version}

---

##### `DatabaseEncryption`<sup>Optional</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.databaseEncryption"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneDatabaseEncryption DatabaseEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#database_encryption GoogleContainerAzureCluster#database_encryption}

---

##### `MainVolume`<sup>Optional</sup> <a name="MainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.mainVolume"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneMainVolume MainVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#main_volume GoogleContainerAzureCluster#main_volume}

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.proxyConfig"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#proxy_config GoogleContainerAzureCluster#proxy_config}

---

##### `ReplicaPlacements`<sup>Optional</sup> <a name="ReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.replicaPlacements"></a>

```csharp
public object ReplicaPlacements { get; set; }
```

- *Type:* object

replica_placements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#replica_placements GoogleContainerAzureCluster#replica_placements}

---

##### `RootVolume`<sup>Optional</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.rootVolume"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneRootVolume RootVolume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#root_volume GoogleContainerAzureCluster#root_volume}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. A set of tags to apply to all underlying control plane Azure resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#tags GoogleContainerAzureCluster#tags}

---

##### `VmSize`<sup>Optional</sup> <a name="VmSize" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane.property.vmSize"></a>

```csharp
public string VmSize { get; set; }
```

- *Type:* string

Optional.

The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#vm_size GoogleContainerAzureCluster#vm_size}

---

### GoogleContainerAzureClusterControlPlaneDatabaseEncryption <a name="GoogleContainerAzureClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneDatabaseEncryption {
    string KeyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId">KeyId</a></code> | <code>string</code> | The ARM ID of the Azure Key Vault key to encrypt / decrypt data. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARM ID of the Azure Key Vault key to encrypt / decrypt data.

For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#key_id GoogleContainerAzureCluster#key_id}

---

### GoogleContainerAzureClusterControlPlaneMainVolume <a name="GoogleContainerAzureClusterControlPlaneMainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneMainVolume {
    double SizeGib = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#size_gib GoogleContainerAzureCluster#size_gib}

---

### GoogleContainerAzureClusterControlPlaneProxyConfig <a name="GoogleContainerAzureClusterControlPlaneProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneProxyConfig {
    string ResourceGroupId,
    string SecretId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.secretId">SecretId</a></code> | <code>string</code> | The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`. |

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; set; }
```

- *Type:* string

The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#resource_group_id GoogleContainerAzureCluster#resource_group_id}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#secret_id GoogleContainerAzureCluster#secret_id}

---

### GoogleContainerAzureClusterControlPlaneReplicaPlacements <a name="GoogleContainerAzureClusterControlPlaneReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneReplicaPlacements {
    string AzureAvailabilityZone,
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>string</code> | For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId">SubnetId</a></code> | <code>string</code> | For a given replica, the ARM ID of the subnet where the control plane VM is deployed. |

---

##### `AzureAvailabilityZone`<sup>Required</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.azureAvailabilityZone"></a>

```csharp
public string AzureAvailabilityZone { get; set; }
```

- *Type:* string

For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#azure_availability_zone GoogleContainerAzureCluster#azure_availability_zone}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacements.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

For a given replica, the ARM ID of the subnet where the control plane VM is deployed.

Make sure it's a subnet under the virtual network in the cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#subnet_id GoogleContainerAzureCluster#subnet_id}

---

### GoogleContainerAzureClusterControlPlaneRootVolume <a name="GoogleContainerAzureClusterControlPlaneRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneRootVolume {
    double SizeGib = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume.property.sizeGib">SizeGib</a></code> | <code>double</code> | Optional. |

---

##### `SizeGib`<sup>Optional</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume.property.sizeGib"></a>

```csharp
public double SizeGib { get; set; }
```

- *Type:* double

Optional.

The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#size_gib GoogleContainerAzureCluster#size_gib}

---

### GoogleContainerAzureClusterControlPlaneSshConfig <a name="GoogleContainerAzureClusterControlPlaneSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneSshConfig {
    string AuthorizedKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig.property.authorizedKey">AuthorizedKey</a></code> | <code>string</code> | The SSH public key data for VMs managed by Anthos. |

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig.property.authorizedKey"></a>

```csharp
public string AuthorizedKey { get; set; }
```

- *Type:* string

The SSH public key data for VMs managed by Anthos.

This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#authorized_key GoogleContainerAzureCluster#authorized_key}

---

### GoogleContainerAzureClusterFleet <a name="GoogleContainerAzureClusterFleet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterFleet {
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet.property.project">Project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#project GoogleContainerAzureCluster#project}

---

### GoogleContainerAzureClusterLoggingConfig <a name="GoogleContainerAzureClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterLoggingConfig {
    GoogleContainerAzureClusterLoggingConfigComponentConfig ComponentConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig.property.componentConfig">ComponentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `ComponentConfig`<sup>Optional</sup> <a name="ComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig.property.componentConfig"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfigComponentConfig ComponentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#component_config GoogleContainerAzureCluster#component_config}

---

### GoogleContainerAzureClusterLoggingConfigComponentConfig <a name="GoogleContainerAzureClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterLoggingConfigComponentConfig {
    string[] EnableComponents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig.property.enableComponents">EnableComponents</a></code> | <code>string[]</code> | Components of the logging configuration to be enabled. |

---

##### `EnableComponents`<sup>Optional</sup> <a name="EnableComponents" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```csharp
public string[] EnableComponents { get; set; }
```

- *Type:* string[]

Components of the logging configuration to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#enable_components GoogleContainerAzureCluster#enable_components}

---

### GoogleContainerAzureClusterNetworking <a name="GoogleContainerAzureClusterNetworking" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterNetworking {
    string[] PodAddressCidrBlocks,
    string[] ServiceAddressCidrBlocks,
    string VirtualNetworkId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; set; }
```

- *Type:* string[]

The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#pod_address_cidr_blocks GoogleContainerAzureCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; set; }
```

- *Type:* string[]

The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#service_address_cidr_blocks GoogleContainerAzureCluster#service_address_cidr_blocks}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The Azure Resource Manager (ARM) ID of the VNet associated with your cluster.

All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/* /resourceGroups/* /providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#virtual_network_id GoogleContainerAzureCluster#virtual_network_id}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleContainerAzureClusterTimeouts <a name="GoogleContainerAzureClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#create GoogleContainerAzureCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#delete GoogleContainerAzureCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#update GoogleContainerAzureCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#create GoogleContainerAzureCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#delete GoogleContainerAzureCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_container_azure_cluster#update GoogleContainerAzureCluster#update}.

---

### GoogleContainerAzureClusterWorkloadIdentityConfig <a name="GoogleContainerAzureClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterWorkloadIdentityConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAzureClusterAuthorizationAdminGroupsList <a name="GoogleContainerAzureClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationAdminGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.get"></a>

```csharp
private GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference <a name="GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterAuthorizationAdminUsersList <a name="GoogleContainerAzureClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationAdminUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.get"></a>

```csharp
private GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference <a name="GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterAuthorizationOutputReference <a name="GoogleContainerAzureClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminGroups">PutAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resetAdminGroups">ResetAdminGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminGroups` <a name="PutAdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminGroups"></a>

```csharp
private void PutAdminGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* object

---

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminUsers"></a>

```csharp
private void PutAdminUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetAdminGroups` <a name="ResetAdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.resetAdminGroups"></a>

```csharp
private void ResetAdminGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroups">AdminGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList">GoogleContainerAzureClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList">GoogleContainerAzureClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput">AdminGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminGroups`<sup>Required</sup> <a name="AdminGroups" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroups"></a>

```csharp
public GoogleContainerAzureClusterAuthorizationAdminGroupsList AdminGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminGroupsList">GoogleContainerAzureClusterAuthorizationAdminGroupsList</a>

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public GoogleContainerAzureClusterAuthorizationAdminUsersList AdminUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationAdminUsersList">GoogleContainerAzureClusterAuthorizationAdminUsersList</a>

---

##### `AdminGroupsInput`<sup>Optional</sup> <a name="AdminGroupsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```csharp
public object AdminGroupsInput { get; }
```

- *Type:* object

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public object AdminUsersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAuthorization">GoogleContainerAzureClusterAuthorization</a>

---


### GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference <a name="GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterAzureServicesAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterAzureServicesAuthentication">GoogleContainerAzureClusterAzureServicesAuthentication</a>

---


### GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference <a name="GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneDatabaseEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

---


### GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference <a name="GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneMainVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

---


### GoogleContainerAzureClusterControlPlaneOutputReference <a name="GoogleContainerAzureClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption">PutDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putMainVolume">PutMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements">PutReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putRootVolume">PutRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putSshConfig">PutSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption">ResetDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetMainVolume">ResetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements">ResetReplicaPlacements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetRootVolume">ResetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetVmSize">ResetVmSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseEncryption` <a name="PutDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```csharp
private void PutDatabaseEncryption(GoogleContainerAzureClusterControlPlaneDatabaseEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `PutMainVolume` <a name="PutMainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putMainVolume"></a>

```csharp
private void PutMainVolume(GoogleContainerAzureClusterControlPlaneMainVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putProxyConfig"></a>

```csharp
private void PutProxyConfig(GoogleContainerAzureClusterControlPlaneProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `PutReplicaPlacements` <a name="PutReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements"></a>

```csharp
private void PutReplicaPlacements(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putReplicaPlacements.parameter.value"></a>

- *Type:* object

---

##### `PutRootVolume` <a name="PutRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putRootVolume"></a>

```csharp
private void PutRootVolume(GoogleContainerAzureClusterControlPlaneRootVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

---

##### `PutSshConfig` <a name="PutSshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putSshConfig"></a>

```csharp
private void PutSshConfig(GoogleContainerAzureClusterControlPlaneSshConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

---

##### `ResetDatabaseEncryption` <a name="ResetDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetDatabaseEncryption"></a>

```csharp
private void ResetDatabaseEncryption()
```

##### `ResetMainVolume` <a name="ResetMainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetMainVolume"></a>

```csharp
private void ResetMainVolume()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetReplicaPlacements` <a name="ResetReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetReplicaPlacements"></a>

```csharp
private void ResetReplicaPlacements()
```

##### `ResetRootVolume` <a name="ResetRootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetRootVolume"></a>

```csharp
private void ResetRootVolume()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVmSize` <a name="ResetVmSize" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.resetVmSize"></a>

```csharp
private void ResetVmSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption">DatabaseEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolume">MainVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference">GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference">GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements">ReplicaPlacements</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList">GoogleContainerAzureClusterControlPlaneReplicaPlacementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolume">RootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference">GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfig">SshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference">GoogleContainerAzureClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput">DatabaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput">MainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput">ReplicaPlacementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput">RootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput">SshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput">VmSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSize">VmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseEncryption`<sup>Required</sup> <a name="DatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference DatabaseEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `MainVolume`<sup>Required</sup> <a name="MainVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolume"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference MainVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference">GoogleContainerAzureClusterControlPlaneMainVolumeOutputReference</a>

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfig"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference">GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference</a>

---

##### `ReplicaPlacements`<sup>Required</sup> <a name="ReplicaPlacements" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacements"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneReplicaPlacementsList ReplicaPlacements { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList">GoogleContainerAzureClusterControlPlaneReplicaPlacementsList</a>

---

##### `RootVolume`<sup>Required</sup> <a name="RootVolume" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolume"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference RootVolume { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference">GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference</a>

---

##### `SshConfig`<sup>Required</sup> <a name="SshConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfig"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneSshConfigOutputReference SshConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference">GoogleContainerAzureClusterControlPlaneSshConfigOutputReference</a>

---

##### `DatabaseEncryptionInput`<sup>Optional</sup> <a name="DatabaseEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneDatabaseEncryption DatabaseEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneDatabaseEncryption">GoogleContainerAzureClusterControlPlaneDatabaseEncryption</a>

---

##### `MainVolumeInput`<sup>Optional</sup> <a name="MainVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneMainVolume MainVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneMainVolume">GoogleContainerAzureClusterControlPlaneMainVolume</a>

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

---

##### `ReplicaPlacementsInput`<sup>Optional</sup> <a name="ReplicaPlacementsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.replicaPlacementsInput"></a>

```csharp
public object ReplicaPlacementsInput { get; }
```

- *Type:* object

---

##### `RootVolumeInput`<sup>Optional</sup> <a name="RootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneRootVolume RootVolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

---

##### `SshConfigInput`<sup>Optional</sup> <a name="SshConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneSshConfig SshConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSizeInput"></a>

```csharp
public string VmSizeInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.vmSize"></a>

```csharp
public string VmSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterControlPlane InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlane">GoogleContainerAzureClusterControlPlane</a>

---


### GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference <a name="GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput">ResourceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId">ResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceGroupIdInput`<sup>Optional</sup> <a name="ResourceGroupIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupIdInput"></a>

```csharp
public string ResourceGroupIdInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupId`<sup>Required</sup> <a name="ResourceGroupId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.resourceGroupId"></a>

```csharp
public string ResourceGroupId { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneProxyConfig">GoogleContainerAzureClusterControlPlaneProxyConfig</a>

---


### GoogleContainerAzureClusterControlPlaneReplicaPlacementsList <a name="GoogleContainerAzureClusterControlPlaneReplicaPlacementsList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneReplicaPlacementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.get"></a>

```csharp
private GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference <a name="GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput">AzureAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone">AzureAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureAvailabilityZoneInput`<sup>Optional</sup> <a name="AzureAvailabilityZoneInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZoneInput"></a>

```csharp
public string AzureAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AzureAvailabilityZone`<sup>Required</sup> <a name="AzureAvailabilityZone" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.azureAvailabilityZone"></a>

```csharp
public string AzureAvailabilityZone { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneReplicaPlacementsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference <a name="GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib">ResetSizeGib</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSizeGib` <a name="ResetSizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```csharp
private void ResetSizeGib()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">SizeGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib">SizeGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGibInput`<sup>Optional</sup> <a name="SizeGibInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```csharp
public double SizeGibInput { get; }
```

- *Type:* double

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```csharp
public double SizeGib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneRootVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneRootVolume">GoogleContainerAzureClusterControlPlaneRootVolume</a>

---


### GoogleContainerAzureClusterControlPlaneSshConfigOutputReference <a name="GoogleContainerAzureClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterControlPlaneSshConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput">AuthorizedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey">AuthorizedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedKeyInput`<sup>Optional</sup> <a name="AuthorizedKeyInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKeyInput"></a>

```csharp
public string AuthorizedKeyInput { get; }
```

- *Type:* string

---

##### `AuthorizedKey`<sup>Required</sup> <a name="AuthorizedKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.authorizedKey"></a>

```csharp
public string AuthorizedKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterControlPlaneSshConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterControlPlaneSshConfig">GoogleContainerAzureClusterControlPlaneSshConfig</a>

---


### GoogleContainerAzureClusterFleetOutputReference <a name="GoogleContainerAzureClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleetOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterFleet">GoogleContainerAzureClusterFleet</a>

---


### GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">ResetEnableComponents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableComponents` <a name="ResetEnableComponents" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```csharp
private void ResetEnableComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">EnableComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">EnableComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableComponentsInput`<sup>Optional</sup> <a name="EnableComponentsInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```csharp
public string[] EnableComponentsInput { get; }
```

- *Type:* string[]

---

##### `EnableComponents`<sup>Required</sup> <a name="EnableComponents" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```csharp
public string[] EnableComponents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfigComponentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAzureClusterLoggingConfigOutputReference <a name="GoogleContainerAzureClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.putComponentConfig">PutComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resetComponentConfig">ResetComponentConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComponentConfig` <a name="PutComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.putComponentConfig"></a>

```csharp
private void PutComponentConfig(GoogleContainerAzureClusterLoggingConfigComponentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

---

##### `ResetComponentConfig` <a name="ResetComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```csharp
private void ResetComponentConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfig">ComponentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfigInput">ComponentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentConfig`<sup>Required</sup> <a name="ComponentConfig" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfig"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference ComponentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAzureClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `ComponentConfigInput`<sup>Optional</sup> <a name="ComponentConfigInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfigComponentConfig ComponentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigComponentConfig">GoogleContainerAzureClusterLoggingConfigComponentConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterLoggingConfig">GoogleContainerAzureClusterLoggingConfig</a>

---


### GoogleContainerAzureClusterNetworkingOutputReference <a name="GoogleContainerAzureClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterNetworkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```csharp
public string[] PodAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```csharp
public string[] ServiceAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworkingOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterNetworking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterNetworking">GoogleContainerAzureClusterNetworking</a>

---


### GoogleContainerAzureClusterTimeoutsOutputReference <a name="GoogleContainerAzureClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleContainerAzureClusterWorkloadIdentityConfigList <a name="GoogleContainerAzureClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterWorkloadIdentityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.get"></a>

```csharp
private GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool">WorkloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig">GoogleContainerAzureClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `WorkloadPool`<sup>Required</sup> <a name="WorkloadPool" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```csharp
public string WorkloadPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleContainerAzureClusterWorkloadIdentityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAzureCluster.GoogleContainerAzureClusterWorkloadIdentityConfig">GoogleContainerAzureClusterWorkloadIdentityConfig</a>

---



