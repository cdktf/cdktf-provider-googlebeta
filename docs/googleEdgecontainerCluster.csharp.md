# `googleEdgecontainerCluster` Submodule <a name="`googleEdgecontainerCluster` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerCluster <a name="GoogleEdgecontainerCluster" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster google_edgecontainer_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerCluster(Construct Scope, string Id, GoogleEdgecontainerClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig">GoogleEdgecontainerClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig">GoogleEdgecontainerClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane">PutControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption">PutControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet">PutFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking">PutNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig">PutSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlane">ResetControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlaneEncryption">ResetControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetDefaultMaxPodsPerNode">ResetDefaultMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools">ResetExternalLoadBalancerIpv4AddressPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetReleaseChannel">ResetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetSystemAddonsConfig">ResetSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTargetVersion">ResetTargetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(GoogleEdgecontainerClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---

##### `PutControlPlane` <a name="PutControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane"></a>

```csharp
private void PutControlPlane(GoogleEdgecontainerClusterControlPlane Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---

##### `PutControlPlaneEncryption` <a name="PutControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption"></a>

```csharp
private void PutControlPlaneEncryption(GoogleEdgecontainerClusterControlPlaneEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putControlPlaneEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---

##### `PutFleet` <a name="PutFleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet"></a>

```csharp
private void PutFleet(GoogleEdgecontainerClusterFleet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy"></a>

```csharp
private void PutMaintenancePolicy(GoogleEdgecontainerClusterMaintenancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---

##### `PutNetworking` <a name="PutNetworking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking"></a>

```csharp
private void PutNetworking(GoogleEdgecontainerClusterNetworking Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---

##### `PutSystemAddonsConfig` <a name="PutSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig"></a>

```csharp
private void PutSystemAddonsConfig(GoogleEdgecontainerClusterSystemAddonsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putSystemAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleEdgecontainerClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

---

##### `ResetControlPlane` <a name="ResetControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlane"></a>

```csharp
private void ResetControlPlane()
```

##### `ResetControlPlaneEncryption` <a name="ResetControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetControlPlaneEncryption"></a>

```csharp
private void ResetControlPlaneEncryption()
```

##### `ResetDefaultMaxPodsPerNode` <a name="ResetDefaultMaxPodsPerNode" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetDefaultMaxPodsPerNode"></a>

```csharp
private void ResetDefaultMaxPodsPerNode()
```

##### `ResetExternalLoadBalancerIpv4AddressPools` <a name="ResetExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetExternalLoadBalancerIpv4AddressPools"></a>

```csharp
private void ResetExternalLoadBalancerIpv4AddressPools()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReleaseChannel` <a name="ResetReleaseChannel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetReleaseChannel"></a>

```csharp
private void ResetReleaseChannel()
```

##### `ResetSystemAddonsConfig` <a name="ResetSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetSystemAddonsConfig"></a>

```csharp
private void ResetSystemAddonsConfig()
```

##### `ResetTargetVersion` <a name="ResetTargetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTargetVersion"></a>

```csharp
private void ResetTargetVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleEdgecontainerCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgecontainerCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgecontainerCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference">GoogleEdgecontainerClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference">GoogleEdgecontainerClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryption">ControlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference">GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneVersion">ControlPlaneVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference">GoogleEdgecontainerClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenanceEvents">MaintenanceEvents</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList">GoogleEdgecontainerClusterMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference">GoogleEdgecontainerClusterMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference">GoogleEdgecontainerClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nodeVersion">NodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfig">SystemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference">GoogleEdgecontainerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryptionInput">ControlPlaneEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneInput">ControlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNodeInput">DefaultMaxPodsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput">ExternalLoadBalancerIpv4AddressPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleetInput">FleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networkingInput">NetworkingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannelInput">ReleaseChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfigInput">SystemAddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersionInput">TargetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNode">DefaultMaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools">ExternalLoadBalancerIpv4AddressPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannel">ReleaseChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorization"></a>

```csharp
public GoogleEdgecontainerClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference">GoogleEdgecontainerClusterAuthorizationOutputReference</a>

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.clusterCaCertificate"></a>

```csharp
public string ClusterCaCertificate { get; }
```

- *Type:* string

---

##### `ControlPlane`<sup>Required</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlane"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneOutputReference ControlPlane { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference">GoogleEdgecontainerClusterControlPlaneOutputReference</a>

---

##### `ControlPlaneEncryption`<sup>Required</sup> <a name="ControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryption"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference ControlPlaneEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference">GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference</a>

---

##### `ControlPlaneVersion`<sup>Required</sup> <a name="ControlPlaneVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneVersion"></a>

```csharp
public string ControlPlaneVersion { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleet"></a>

```csharp
public GoogleEdgecontainerClusterFleetOutputReference Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference">GoogleEdgecontainerClusterFleetOutputReference</a>

---

##### `MaintenanceEvents`<sup>Required</sup> <a name="MaintenanceEvents" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenanceEvents"></a>

```csharp
public GoogleEdgecontainerClusterMaintenanceEventsList MaintenanceEvents { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList">GoogleEdgecontainerClusterMaintenanceEventsList</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicy"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyOutputReference MaintenancePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference">GoogleEdgecontainerClusterMaintenancePolicyOutputReference</a>

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networking"></a>

```csharp
public GoogleEdgecontainerClusterNetworkingOutputReference Networking { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference">GoogleEdgecontainerClusterNetworkingOutputReference</a>

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nodeVersion"></a>

```csharp
public string NodeVersion { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemAddonsConfig`<sup>Required</sup> <a name="SystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfig"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfigOutputReference SystemAddonsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeouts"></a>

```csharp
public GoogleEdgecontainerClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference">GoogleEdgecontainerClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.authorizationInput"></a>

```csharp
public GoogleEdgecontainerClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---

##### `ControlPlaneEncryptionInput`<sup>Optional</sup> <a name="ControlPlaneEncryptionInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneEncryptionInput"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneEncryption ControlPlaneEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---

##### `ControlPlaneInput`<sup>Optional</sup> <a name="ControlPlaneInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.controlPlaneInput"></a>

```csharp
public GoogleEdgecontainerClusterControlPlane ControlPlaneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---

##### `DefaultMaxPodsPerNodeInput`<sup>Optional</sup> <a name="DefaultMaxPodsPerNodeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNodeInput"></a>

```csharp
public double DefaultMaxPodsPerNodeInput { get; }
```

- *Type:* double

---

##### `ExternalLoadBalancerIpv4AddressPoolsInput`<sup>Optional</sup> <a name="ExternalLoadBalancerIpv4AddressPoolsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPoolsInput"></a>

```csharp
public string[] ExternalLoadBalancerIpv4AddressPoolsInput { get; }
```

- *Type:* string[]

---

##### `FleetInput`<sup>Optional</sup> <a name="FleetInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.fleetInput"></a>

```csharp
public GoogleEdgecontainerClusterFleet FleetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.maintenancePolicyInput"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicy MaintenancePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInput`<sup>Optional</sup> <a name="NetworkingInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.networkingInput"></a>

```csharp
public GoogleEdgecontainerClusterNetworking NetworkingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReleaseChannelInput`<sup>Optional</sup> <a name="ReleaseChannelInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannelInput"></a>

```csharp
public string ReleaseChannelInput { get; }
```

- *Type:* string

---

##### `SystemAddonsConfigInput`<sup>Optional</sup> <a name="SystemAddonsConfigInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.systemAddonsConfigInput"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfig SystemAddonsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---

##### `TargetVersionInput`<sup>Optional</sup> <a name="TargetVersionInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersionInput"></a>

```csharp
public string TargetVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DefaultMaxPodsPerNode`<sup>Required</sup> <a name="DefaultMaxPodsPerNode" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.defaultMaxPodsPerNode"></a>

```csharp
public double DefaultMaxPodsPerNode { get; }
```

- *Type:* double

---

##### `ExternalLoadBalancerIpv4AddressPools`<sup>Required</sup> <a name="ExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.externalLoadBalancerIpv4AddressPools"></a>

```csharp
public string[] ExternalLoadBalancerIpv4AddressPools { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReleaseChannel`<sup>Required</sup> <a name="ReleaseChannel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.releaseChannel"></a>

```csharp
public string ReleaseChannel { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerClusterAuthorization <a name="GoogleEdgecontainerClusterAuthorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterAuthorization {
    GoogleEdgecontainerClusterAuthorizationAdminUsers AdminUsers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | admin_users block. |

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization.property.adminUsers"></a>

```csharp
public GoogleEdgecontainerClusterAuthorizationAdminUsers AdminUsers { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#admin_users GoogleEdgecontainerCluster#admin_users}

---

### GoogleEdgecontainerClusterAuthorizationAdminUsers <a name="GoogleEdgecontainerClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterAuthorizationAdminUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.property.username">Username</a></code> | <code>string</code> | An active Google username. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

An active Google username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#username GoogleEdgecontainerCluster#username}

---

### GoogleEdgecontainerClusterConfig <a name="GoogleEdgecontainerClusterConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleEdgecontainerClusterAuthorization Authorization,
    GoogleEdgecontainerClusterFleet Fleet,
    string Location,
    string Name,
    GoogleEdgecontainerClusterNetworking Networking,
    GoogleEdgecontainerClusterControlPlane ControlPlane = null,
    GoogleEdgecontainerClusterControlPlaneEncryption ControlPlaneEncryption = null,
    double DefaultMaxPodsPerNode = null,
    string[] ExternalLoadBalancerIpv4AddressPools = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleEdgecontainerClusterMaintenancePolicy MaintenancePolicy = null,
    string Project = null,
    string ReleaseChannel = null,
    GoogleEdgecontainerClusterSystemAddonsConfig SystemAddonsConfig = null,
    string TargetVersion = null,
    GoogleEdgecontainerClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.name">Name</a></code> | <code>string</code> | The GDCE cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.networking">Networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlane">ControlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlaneEncryption">ControlPlaneEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | control_plane_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.defaultMaxPodsPerNode">DefaultMaxPodsPerNode</a></code> | <code>double</code> | The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools">ExternalLoadBalancerIpv4AddressPools</a></code> | <code>string[]</code> | Address pools for cluster data plane external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels for the edgecloud cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.releaseChannel">ReleaseChannel</a></code> | <code>string</code> | The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.systemAddonsConfig">SystemAddonsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | system_addons_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.targetVersion">TargetVersion</a></code> | <code>string</code> | The target cluster version. For example: "1.5.0". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.authorization"></a>

```csharp
public GoogleEdgecontainerClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#authorization GoogleEdgecontainerCluster#authorization}

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.fleet"></a>

```csharp
public GoogleEdgecontainerClusterFleet Fleet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#fleet GoogleEdgecontainerCluster#fleet}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#location GoogleEdgecontainerCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The GDCE cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#name GoogleEdgecontainerCluster#name}

---

##### `Networking`<sup>Required</sup> <a name="Networking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.networking"></a>

```csharp
public GoogleEdgecontainerClusterNetworking Networking { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#networking GoogleEdgecontainerCluster#networking}

---

##### `ControlPlane`<sup>Optional</sup> <a name="ControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlane"></a>

```csharp
public GoogleEdgecontainerClusterControlPlane ControlPlane { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#control_plane GoogleEdgecontainerCluster#control_plane}

---

##### `ControlPlaneEncryption`<sup>Optional</sup> <a name="ControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.controlPlaneEncryption"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneEncryption ControlPlaneEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

control_plane_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#control_plane_encryption GoogleEdgecontainerCluster#control_plane_encryption}

---

##### `DefaultMaxPodsPerNode`<sup>Optional</sup> <a name="DefaultMaxPodsPerNode" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.defaultMaxPodsPerNode"></a>

```csharp
public double DefaultMaxPodsPerNode { get; set; }
```

- *Type:* double

The default maximum number of pods per node used if a maximum value is not specified explicitly for a node pool in this cluster.

If unspecified, the
Kubernetes default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#default_max_pods_per_node GoogleEdgecontainerCluster#default_max_pods_per_node}

---

##### `ExternalLoadBalancerIpv4AddressPools`<sup>Optional</sup> <a name="ExternalLoadBalancerIpv4AddressPools" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.externalLoadBalancerIpv4AddressPools"></a>

```csharp
public string[] ExternalLoadBalancerIpv4AddressPools { get; set; }
```

- *Type:* string[]

Address pools for cluster data plane external load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#external_load_balancer_ipv4_address_pools GoogleEdgecontainerCluster#external_load_balancer_ipv4_address_pools}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels for the edgecloud cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#labels GoogleEdgecontainerCluster#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.maintenancePolicy"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicy MaintenancePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#maintenance_policy GoogleEdgecontainerCluster#maintenance_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}.

---

##### `ReleaseChannel`<sup>Optional</sup> <a name="ReleaseChannel" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.releaseChannel"></a>

```csharp
public string ReleaseChannel { get; set; }
```

- *Type:* string

The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#release_channel GoogleEdgecontainerCluster#release_channel}

---

##### `SystemAddonsConfig`<sup>Optional</sup> <a name="SystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.systemAddonsConfig"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfig SystemAddonsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

system_addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#system_addons_config GoogleEdgecontainerCluster#system_addons_config}

---

##### `TargetVersion`<sup>Optional</sup> <a name="TargetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.targetVersion"></a>

```csharp
public string TargetVersion { get; set; }
```

- *Type:* string

The target cluster version. For example: "1.5.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#target_version GoogleEdgecontainerCluster#target_version}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterConfig.property.timeouts"></a>

```csharp
public GoogleEdgecontainerClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts">GoogleEdgecontainerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#timeouts GoogleEdgecontainerCluster#timeouts}

---

### GoogleEdgecontainerClusterControlPlane <a name="GoogleEdgecontainerClusterControlPlane" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlane {
    GoogleEdgecontainerClusterControlPlaneLocal Local = null,
    GoogleEdgecontainerClusterControlPlaneRemote Remote = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.local">Local</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | remote block. |

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.local"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneLocal Local { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#local GoogleEdgecontainerCluster#local}

---

##### `Remote`<sup>Optional</sup> <a name="Remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane.property.remote"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneRemote Remote { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#remote GoogleEdgecontainerCluster#remote}

---

### GoogleEdgecontainerClusterControlPlaneEncryption <a name="GoogleEdgecontainerClusterControlPlaneEncryption" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneEncryption {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting control plane disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#kms_key GoogleEdgecontainerCluster#kms_key}

---

### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus {

};
```


### GoogleEdgecontainerClusterControlPlaneLocal <a name="GoogleEdgecontainerClusterControlPlaneLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneLocal {
    string MachineFilter = null,
    double NodeCount = null,
    string NodeLocation = null,
    string SharedDeploymentPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.machineFilter">MachineFilter</a></code> | <code>string</code> | Only machines matching this filter will be allowed to host control plane nodes. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeCount">NodeCount</a></code> | <code>double</code> | The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy">SharedDeploymentPolicy</a></code> | <code>string</code> | Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]. |

---

##### `MachineFilter`<sup>Optional</sup> <a name="MachineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.machineFilter"></a>

```csharp
public string MachineFilter { get; set; }
```

- *Type:* string

Only machines matching this filter will be allowed to host control plane nodes.

The filtering language accepts strings like "name=<name>",
and is documented here: [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#machine_filter GoogleEdgecontainerCluster#machine_filter}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

The number of nodes to serve as replicas of the Control Plane. Only 1 and 3 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#node_count GoogleEdgecontainerCluster#node_count}

---

##### `NodeLocation`<sup>Optional</sup> <a name="NodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; set; }
```

- *Type:* string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

##### `SharedDeploymentPolicy`<sup>Optional</sup> <a name="SharedDeploymentPolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal.property.sharedDeploymentPolicy"></a>

```csharp
public string SharedDeploymentPolicy { get; set; }
```

- *Type:* string

Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#shared_deployment_policy GoogleEdgecontainerCluster#shared_deployment_policy}

---

### GoogleEdgecontainerClusterControlPlaneRemote <a name="GoogleEdgecontainerClusterControlPlaneRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneRemote {
    string NodeLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'. |

---

##### `NodeLocation`<sup>Optional</sup> <a name="NodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; set; }
```

- *Type:* string

Name of the Google Distributed Cloud Edge zones where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#node_location GoogleEdgecontainerCluster#node_location}

---

### GoogleEdgecontainerClusterFleet <a name="GoogleEdgecontainerClusterFleet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterFleet {
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.property.project">Project</a></code> | <code>string</code> | The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name of the Fleet host project where this cluster will be registered. Project names are formatted as 'projects/<project-number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#project GoogleEdgecontainerCluster#project}

---

### GoogleEdgecontainerClusterMaintenanceEvents <a name="GoogleEdgecontainerClusterMaintenanceEvents" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenanceEvents {

};
```


### GoogleEdgecontainerClusterMaintenancePolicy <a name="GoogleEdgecontainerClusterMaintenancePolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicy {
    GoogleEdgecontainerClusterMaintenancePolicyWindow Window,
    object MaintenanceExclusions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | window block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions">MaintenanceExclusions</a></code> | <code>object</code> | maintenance_exclusions block. |

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.window"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindow Window { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

##### `MaintenanceExclusions`<sup>Optional</sup> <a name="MaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy.property.maintenanceExclusions"></a>

```csharp
public object MaintenanceExclusions { get; set; }
```

- *Type:* object

maintenance_exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#maintenance_exclusions GoogleEdgecontainerCluster#maintenance_exclusions}

---

### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions {
    string Id = null,
    GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow Window = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id">Id</a></code> | <code>string</code> | A unique (per cluster) id for the window. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | window block. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

A unique (per cluster) id for the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#id GoogleEdgecontainerCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusions.property.window"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow Window { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow {
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime">EndTime</a></code> | <code>string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime">StartTime</a></code> | <code>string</code> | The time that the window first starts. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyWindow {
    GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow RecurringWindow
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow">RecurringWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | recurring_window block. |

---

##### `RecurringWindow`<sup>Required</sup> <a name="RecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow.property.recurringWindow"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow RecurringWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

recurring_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#recurring_window GoogleEdgecontainerCluster#recurring_window}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow {
    string Recurrence = null,
    GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow Window = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence">Recurrence</a></code> | <code>string</code> | An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | window block. |

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.recurrence"></a>

```csharp
public string Recurrence { get; set; }
```

- *Type:* string

An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how this window recurs. They go on for the span of time between the start and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#recurrence GoogleEdgecontainerCluster#recurrence}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow.property.window"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow Window { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#window GoogleEdgecontainerCluster#window}

---

### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow {
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime">EndTime</a></code> | <code>string</code> | The time that the window ends. The end time must take place after the start time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime">StartTime</a></code> | <code>string</code> | The time that the window first starts. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The time that the window ends. The end time must take place after the start time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#end_time GoogleEdgecontainerCluster#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time that the window first starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#start_time GoogleEdgecontainerCluster#start_time}

---

### GoogleEdgecontainerClusterNetworking <a name="GoogleEdgecontainerClusterNetworking" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterNetworking {
    string[] ClusterIpv4CidrBlocks,
    string[] ServicesIpv4CidrBlocks,
    string[] ClusterIpv6CidrBlocks = null,
    string[] ServicesIpv6CidrBlocks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks">ClusterIpv4CidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks">ServicesIpv4CidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these blocks. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks">ClusterIpv6CidrBlocks</a></code> | <code>string[]</code> | If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks">ServicesIpv6CidrBlocks</a></code> | <code>string[]</code> | If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address. |

---

##### `ClusterIpv4CidrBlocks`<sup>Required</sup> <a name="ClusterIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv4CidrBlocks"></a>

```csharp
public string[] ClusterIpv4CidrBlocks { get; set; }
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#cluster_ipv4_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv4_cidr_blocks}

---

##### `ServicesIpv4CidrBlocks`<sup>Required</sup> <a name="ServicesIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv4CidrBlocks"></a>

```csharp
public string[] ServicesIpv4CidrBlocks { get; set; }
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these blocks.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#services_ipv4_cidr_blocks GoogleEdgecontainerCluster#services_ipv4_cidr_blocks}

---

##### `ClusterIpv6CidrBlocks`<sup>Optional</sup> <a name="ClusterIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.clusterIpv6CidrBlocks"></a>

```csharp
public string[] ClusterIpv6CidrBlocks { get; set; }
```

- *Type:* string[]

If specified, dual stack mode is enabled and all pods in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#cluster_ipv6_cidr_blocks GoogleEdgecontainerCluster#cluster_ipv6_cidr_blocks}

---

##### `ServicesIpv6CidrBlocks`<sup>Optional</sup> <a name="ServicesIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking.property.servicesIpv6CidrBlocks"></a>

```csharp
public string[] ServicesIpv6CidrBlocks { get; set; }
```

- *Type:* string[]

If specified, dual stack mode is enabled and all services in the cluster are assigned an IPv6 address from these blocks alongside from an IPv4 address.

Only a single block is supported. This field cannot be changed
after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#services_ipv6_cidr_blocks GoogleEdgecontainerCluster#services_ipv6_cidr_blocks}

---

### GoogleEdgecontainerClusterSystemAddonsConfig <a name="GoogleEdgecontainerClusterSystemAddonsConfig" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterSystemAddonsConfig {
    GoogleEdgecontainerClusterSystemAddonsConfigIngress Ingress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | ingress block. |

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig.property.ingress"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfigIngress Ingress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#ingress GoogleEdgecontainerCluster#ingress}

---

### GoogleEdgecontainerClusterSystemAddonsConfigIngress <a name="GoogleEdgecontainerClusterSystemAddonsConfigIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterSystemAddonsConfigIngress {
    object Disabled = null,
    string Ipv4Vip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.disabled">Disabled</a></code> | <code>object</code> | Whether Ingress is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip">Ipv4Vip</a></code> | <code>string</code> | Ingress VIP. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether Ingress is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#disabled GoogleEdgecontainerCluster#disabled}

---

##### `Ipv4Vip`<sup>Optional</sup> <a name="Ipv4Vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress.property.ipv4Vip"></a>

```csharp
public string Ipv4Vip { get; set; }
```

- *Type:* string

Ingress VIP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#ipv4_vip GoogleEdgecontainerCluster#ipv4_vip}

---

### GoogleEdgecontainerClusterTimeouts <a name="GoogleEdgecontainerClusterTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#create GoogleEdgecontainerCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#delete GoogleEdgecontainerCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_edgecontainer_cluster#update GoogleEdgecontainerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference <a name="GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterAuthorizationAdminUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---


### GoogleEdgecontainerClusterAuthorizationOutputReference <a name="GoogleEdgecontainerClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers">PutAdminUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUsers` <a name="PutAdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers"></a>

```csharp
private void PutAdminUsers(GoogleEdgecontainerClusterAuthorizationAdminUsers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsers">AdminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference">GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput">AdminUsersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUsers`<sup>Required</sup> <a name="AdminUsers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsers"></a>

```csharp
public GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference AdminUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference">GoogleEdgecontainerClusterAuthorizationAdminUsersOutputReference</a>

---

##### `AdminUsersInput`<sup>Optional</sup> <a name="AdminUsersInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```csharp
public GoogleEdgecontainerClusterAuthorizationAdminUsers AdminUsersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationAdminUsers">GoogleEdgecontainerClusterAuthorizationAdminUsers</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterAuthorization">GoogleEdgecontainerClusterAuthorization</a>

---


### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get"></a>

```csharp
private GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference <a name="GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatus</a>

---


### GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference <a name="GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion">KmsKeyActiveVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState">KmsKeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus">KmsStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyActiveVersion`<sup>Required</sup> <a name="KmsKeyActiveVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```csharp
public string KmsKeyActiveVersion { get; }
```

- *Type:* string

---

##### `KmsKeyState`<sup>Required</sup> <a name="KmsKeyState" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyState"></a>

```csharp
public string KmsKeyState { get; }
```

- *Type:* string

---

##### `KmsStatus`<sup>Required</sup> <a name="KmsStatus" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsStatus"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList KmsStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList">GoogleEdgecontainerClusterControlPlaneEncryptionKmsStatusList</a>

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryptionOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneEncryption">GoogleEdgecontainerClusterControlPlaneEncryption</a>

---


### GoogleEdgecontainerClusterControlPlaneLocalOutputReference <a name="GoogleEdgecontainerClusterControlPlaneLocalOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneLocalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter">ResetMachineFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation">ResetNodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy">ResetSharedDeploymentPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMachineFilter` <a name="ResetMachineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetMachineFilter"></a>

```csharp
private void ResetMachineFilter()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetNodeLocation` <a name="ResetNodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetNodeLocation"></a>

```csharp
private void ResetNodeLocation()
```

##### `ResetSharedDeploymentPolicy` <a name="ResetSharedDeploymentPolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.resetSharedDeploymentPolicy"></a>

```csharp
private void ResetSharedDeploymentPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput">MachineFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput">NodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput">SharedDeploymentPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter">MachineFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy">SharedDeploymentPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachineFilterInput`<sup>Optional</sup> <a name="MachineFilterInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilterInput"></a>

```csharp
public string MachineFilterInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocationInput"></a>

```csharp
public string NodeLocationInput { get; }
```

- *Type:* string

---

##### `SharedDeploymentPolicyInput`<sup>Optional</sup> <a name="SharedDeploymentPolicyInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicyInput"></a>

```csharp
public string SharedDeploymentPolicyInput { get; }
```

- *Type:* string

---

##### `MachineFilter`<sup>Required</sup> <a name="MachineFilter" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.machineFilter"></a>

```csharp
public string MachineFilter { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; }
```

- *Type:* string

---

##### `SharedDeploymentPolicy`<sup>Required</sup> <a name="SharedDeploymentPolicy" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.sharedDeploymentPolicy"></a>

```csharp
public string SharedDeploymentPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneLocal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---


### GoogleEdgecontainerClusterControlPlaneOutputReference <a name="GoogleEdgecontainerClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal">PutLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote">PutRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetRemote">ResetRemote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocal` <a name="PutLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal"></a>

```csharp
private void PutLocal(GoogleEdgecontainerClusterControlPlaneLocal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---

##### `PutRemote` <a name="PutRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote"></a>

```csharp
private void PutRemote(GoogleEdgecontainerClusterControlPlaneRemote Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetRemote` <a name="ResetRemote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.resetRemote"></a>

```csharp
private void ResetRemote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.local">Local</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference">GoogleEdgecontainerClusterControlPlaneLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference">GoogleEdgecontainerClusterControlPlaneRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.localInput">LocalInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remoteInput">RemoteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.local"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneLocalOutputReference Local { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocalOutputReference">GoogleEdgecontainerClusterControlPlaneLocalOutputReference</a>

---

##### `Remote`<sup>Required</sup> <a name="Remote" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remote"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneRemoteOutputReference Remote { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference">GoogleEdgecontainerClusterControlPlaneRemoteOutputReference</a>

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.localInput"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneLocal LocalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneLocal">GoogleEdgecontainerClusterControlPlaneLocal</a>

---

##### `RemoteInput`<sup>Optional</sup> <a name="RemoteInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.remoteInput"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneRemote RemoteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterControlPlane InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlane">GoogleEdgecontainerClusterControlPlane</a>

---


### GoogleEdgecontainerClusterControlPlaneRemoteOutputReference <a name="GoogleEdgecontainerClusterControlPlaneRemoteOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterControlPlaneRemoteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation">ResetNodeLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeLocation` <a name="ResetNodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.resetNodeLocation"></a>

```csharp
private void ResetNodeLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput">NodeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation">NodeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeLocationInput`<sup>Optional</sup> <a name="NodeLocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocationInput"></a>

```csharp
public string NodeLocationInput { get; }
```

- *Type:* string

---

##### `NodeLocation`<sup>Required</sup> <a name="NodeLocation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.nodeLocation"></a>

```csharp
public string NodeLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemoteOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterControlPlaneRemote InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterControlPlaneRemote">GoogleEdgecontainerClusterControlPlaneRemote</a>

---


### GoogleEdgecontainerClusterFleetOutputReference <a name="GoogleEdgecontainerClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleetOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterFleet">GoogleEdgecontainerClusterFleet</a>

---


### GoogleEdgecontainerClusterMaintenanceEventsList <a name="GoogleEdgecontainerClusterMaintenanceEventsList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenanceEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get"></a>

```csharp
private GoogleEdgecontainerClusterMaintenanceEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleEdgecontainerClusterMaintenanceEventsOutputReference <a name="GoogleEdgecontainerClusterMaintenanceEventsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenanceEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents">GoogleEdgecontainerClusterMaintenanceEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEventsOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterMaintenanceEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenanceEvents">GoogleEdgecontainerClusterMaintenanceEvents</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get"></a>

```csharp
private GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow"></a>

```csharp
private void PutWindow(GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.resetWindow"></a>

```csharp
private void ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.window"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.windowInput"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow WindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions">PutMaintenanceExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions">ResetMaintenanceExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceExclusions` <a name="PutMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions"></a>

```csharp
private void PutMaintenanceExclusions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putMaintenanceExclusions.parameter.value"></a>

- *Type:* object

---

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow"></a>

```csharp
private void PutWindow(GoogleEdgecontainerClusterMaintenancePolicyWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `ResetMaintenanceExclusions` <a name="ResetMaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.resetMaintenanceExclusions"></a>

```csharp
private void ResetMaintenanceExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions">MaintenanceExclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput">MaintenanceExclusionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceExclusions`<sup>Required</sup> <a name="MaintenanceExclusions" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusions"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList MaintenanceExclusions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList">GoogleEdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.window"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference</a>

---

##### `MaintenanceExclusionsInput`<sup>Optional</sup> <a name="MaintenanceExclusionsInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.maintenanceExclusionsInput"></a>

```csharp
public object MaintenanceExclusionsInput { get; }
```

- *Type:* object

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.windowInput"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindow WindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicy">GoogleEdgecontainerClusterMaintenancePolicy</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow">PutRecurringWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurringWindow` <a name="PutRecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow"></a>

```csharp
private void PutRecurringWindow(GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.putRecurringWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow">RecurringWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput">RecurringWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecurringWindow`<sup>Required</sup> <a name="RecurringWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindow"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference RecurringWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference</a>

---

##### `RecurringWindowInput`<sup>Optional</sup> <a name="RecurringWindowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.recurringWindowInput"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow RecurringWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindow">GoogleEdgecontainerClusterMaintenancePolicyWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow">PutWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow"></a>

```csharp
private void PutWindow(GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.resetWindow"></a>

```csharp
private void ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window">Window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.window"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrenceInput"></a>

```csharp
public string RecurrenceInput { get; }
```

- *Type:* string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.windowInput"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow WindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.recurrence"></a>

```csharp
public string Recurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindow</a>

---


### GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference <a name="GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow">GoogleEdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow</a>

---


### GoogleEdgecontainerClusterNetworkingOutputReference <a name="GoogleEdgecontainerClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterNetworkingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks">ResetClusterIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks">ResetServicesIpv6CidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterIpv6CidrBlocks` <a name="ResetClusterIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetClusterIpv6CidrBlocks"></a>

```csharp
private void ResetClusterIpv6CidrBlocks()
```

##### `ResetServicesIpv6CidrBlocks` <a name="ResetServicesIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.resetServicesIpv6CidrBlocks"></a>

```csharp
private void ResetServicesIpv6CidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput">ClusterIpv4CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput">ClusterIpv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput">ServicesIpv4CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput">ServicesIpv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks">ClusterIpv4CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks">ClusterIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks">ServicesIpv4CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks">ServicesIpv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `ClusterIpv4CidrBlocksInput`<sup>Optional</sup> <a name="ClusterIpv4CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocksInput"></a>

```csharp
public string[] ClusterIpv4CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ClusterIpv6CidrBlocksInput`<sup>Optional</sup> <a name="ClusterIpv6CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocksInput"></a>

```csharp
public string[] ClusterIpv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServicesIpv4CidrBlocksInput`<sup>Optional</sup> <a name="ServicesIpv4CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocksInput"></a>

```csharp
public string[] ServicesIpv4CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServicesIpv6CidrBlocksInput`<sup>Optional</sup> <a name="ServicesIpv6CidrBlocksInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocksInput"></a>

```csharp
public string[] ServicesIpv6CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ClusterIpv4CidrBlocks`<sup>Required</sup> <a name="ClusterIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv4CidrBlocks"></a>

```csharp
public string[] ClusterIpv4CidrBlocks { get; }
```

- *Type:* string[]

---

##### `ClusterIpv6CidrBlocks`<sup>Required</sup> <a name="ClusterIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.clusterIpv6CidrBlocks"></a>

```csharp
public string[] ClusterIpv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServicesIpv4CidrBlocks`<sup>Required</sup> <a name="ServicesIpv4CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv4CidrBlocks"></a>

```csharp
public string[] ServicesIpv4CidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServicesIpv6CidrBlocks`<sup>Required</sup> <a name="ServicesIpv6CidrBlocks" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.servicesIpv6CidrBlocks"></a>

```csharp
public string[] ServicesIpv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworkingOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterNetworking InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterNetworking">GoogleEdgecontainerClusterNetworking</a>

---


### GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference <a name="GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip">ResetIpv4Vip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetIpv4Vip` <a name="ResetIpv4Vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.resetIpv4Vip"></a>

```csharp
private void ResetIpv4Vip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput">Ipv4VipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip">Ipv4Vip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `Ipv4VipInput`<sup>Optional</sup> <a name="Ipv4VipInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4VipInput"></a>

```csharp
public string Ipv4VipInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Ipv4Vip`<sup>Required</sup> <a name="Ipv4Vip" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.ipv4Vip"></a>

```csharp
public string Ipv4Vip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfigIngress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---


### GoogleEdgecontainerClusterSystemAddonsConfigOutputReference <a name="GoogleEdgecontainerClusterSystemAddonsConfigOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterSystemAddonsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress">ResetIngress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress"></a>

```csharp
private void PutIngress(GoogleEdgecontainerClusterSystemAddonsConfigIngress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.resetIngress"></a>

```csharp
private void ResetIngress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput">IngressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingress"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference">GoogleEdgecontainerClusterSystemAddonsConfigIngressOutputReference</a>

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.ingressInput"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfigIngress IngressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigIngress">GoogleEdgecontainerClusterSystemAddonsConfigIngress</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerClusterSystemAddonsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterSystemAddonsConfig">GoogleEdgecontainerClusterSystemAddonsConfig</a>

---


### GoogleEdgecontainerClusterTimeoutsOutputReference <a name="GoogleEdgecontainerClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerCluster.GoogleEdgecontainerClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



