# `googleGkeonpremVmwareAdminCluster` Submodule <a name="`googleGkeonpremVmwareAdminCluster` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremVmwareAdminCluster <a name="GoogleGkeonpremVmwareAdminCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster google_gkeonprem_vmware_admin_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminCluster(Construct Scope, string Id, GoogleGkeonpremVmwareAdminClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig">GoogleGkeonpremVmwareAdminClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig">GoogleGkeonpremVmwareAdminClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAddonNode">PutAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAntiAffinityGroups">PutAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAuthorization">PutAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAutoRepairConfig">PutAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putControlPlaneNode">PutControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putPlatformConfig">PutPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putVcenter">PutVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAddonNode">ResetAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAntiAffinityGroups">ResetAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAutoRepairConfig">ResetAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetBootstrapClusterMembership">ResetBootstrapClusterMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetControlPlaneNode">ResetControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetOnPremVersion">ResetOnPremVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetPlatformConfig">ResetPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetVcenter">ResetVcenter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddonNode` <a name="PutAddonNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAddonNode"></a>

```csharp
private void PutAddonNode(GoogleGkeonpremVmwareAdminClusterAddonNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAddonNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a>

---

##### `PutAntiAffinityGroups` <a name="PutAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAntiAffinityGroups"></a>

```csharp
private void PutAntiAffinityGroups(GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAntiAffinityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `PutAuthorization` <a name="PutAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAuthorization"></a>

```csharp
private void PutAuthorization(GoogleGkeonpremVmwareAdminClusterAuthorization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a>

---

##### `PutAutoRepairConfig` <a name="PutAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAutoRepairConfig"></a>

```csharp
private void PutAutoRepairConfig(GoogleGkeonpremVmwareAdminClusterAutoRepairConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putAutoRepairConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `PutControlPlaneNode` <a name="PutControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putControlPlaneNode"></a>

```csharp
private void PutControlPlaneNode(GoogleGkeonpremVmwareAdminClusterControlPlaneNode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putControlPlaneNode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(GoogleGkeonpremVmwareAdminClusterLoadBalancer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GoogleGkeonpremVmwareAdminClusterNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `PutPlatformConfig` <a name="PutPlatformConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putPlatformConfig"></a>

```csharp
private void PutPlatformConfig(GoogleGkeonpremVmwareAdminClusterPlatformConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGkeonpremVmwareAdminClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts">GoogleGkeonpremVmwareAdminClusterTimeouts</a>

---

##### `PutVcenter` <a name="PutVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putVcenter"></a>

```csharp
private void PutVcenter(GoogleGkeonpremVmwareAdminClusterVcenter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.putVcenter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a>

---

##### `ResetAddonNode` <a name="ResetAddonNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAddonNode"></a>

```csharp
private void ResetAddonNode()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAntiAffinityGroups` <a name="ResetAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAntiAffinityGroups"></a>

```csharp
private void ResetAntiAffinityGroups()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetAutoRepairConfig` <a name="ResetAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetAutoRepairConfig"></a>

```csharp
private void ResetAutoRepairConfig()
```

##### `ResetBootstrapClusterMembership` <a name="ResetBootstrapClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetBootstrapClusterMembership"></a>

```csharp
private void ResetBootstrapClusterMembership()
```

##### `ResetControlPlaneNode` <a name="ResetControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetControlPlaneNode"></a>

```csharp
private void ResetControlPlaneNode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetImageType"></a>

```csharp
private void ResetImageType()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetOnPremVersion` <a name="ResetOnPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetOnPremVersion"></a>

```csharp
private void ResetOnPremVersion()
```

##### `ResetPlatformConfig` <a name="ResetPlatformConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetPlatformConfig"></a>

```csharp
private void ResetPlatformConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVcenter` <a name="ResetVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.resetVcenter"></a>

```csharp
private void ResetVcenter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremVmwareAdminCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremVmwareAdminCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremVmwareAdminCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremVmwareAdminCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleGkeonpremVmwareAdminCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeonpremVmwareAdminCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeonpremVmwareAdminCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremVmwareAdminCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.addonNode">AddonNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference">GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference">GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.fleet">Fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList">GoogleGkeonpremVmwareAdminClusterFleetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.platformConfig">PlatformConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference">GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList">GoogleGkeonpremVmwareAdminClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference">GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference">GoogleGkeonpremVmwareAdminClusterVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.addonNodeInput">AddonNodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput">AntiAffinityGroupsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.authorizationInput">AuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.autoRepairConfigInput">AutoRepairConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput">BootstrapClusterMembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.controlPlaneNodeInput">ControlPlaneNodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.onPremVersionInput">OnPremVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.platformConfigInput">PlatformConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.vcenterInput">VcenterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.bootstrapClusterMembership">BootstrapClusterMembership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.onPremVersion">OnPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AddonNode`<sup>Required</sup> <a name="AddonNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.addonNode"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference AddonNode { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference">GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference</a>

---

##### `AntiAffinityGroups`<sup>Required</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.antiAffinityGroups"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference AntiAffinityGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference</a>

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.authorization"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference">GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference</a>

---

##### `AutoRepairConfig`<sup>Required</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.autoRepairConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference AutoRepairConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference">GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference</a>

---

##### `ControlPlaneNode`<sup>Required</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.controlPlaneNode"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference ControlPlaneNode { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference">GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Fleet`<sup>Required</sup> <a name="Fleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.fleet"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterFleetList Fleet { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList">GoogleGkeonpremVmwareAdminClusterFleetList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.loadBalancer"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference</a>

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.networkConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference</a>

---

##### `PlatformConfig`<sup>Required</sup> <a name="PlatformConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.platformConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference PlatformConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference">GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.status"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList">GoogleGkeonpremVmwareAdminClusterStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.timeouts"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference">GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Vcenter`<sup>Required</sup> <a name="Vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.vcenter"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterVcenterOutputReference Vcenter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference">GoogleGkeonpremVmwareAdminClusterVcenterOutputReference</a>

---

##### `AddonNodeInput`<sup>Optional</sup> <a name="AddonNodeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.addonNodeInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNode AddonNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AntiAffinityGroupsInput`<sup>Optional</sup> <a name="AntiAffinityGroupsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.antiAffinityGroupsInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups AntiAffinityGroupsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.authorizationInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAuthorization AuthorizationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a>

---

##### `AutoRepairConfigInput`<sup>Optional</sup> <a name="AutoRepairConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.autoRepairConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAutoRepairConfig AutoRepairConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a>

---

##### `BootstrapClusterMembershipInput`<sup>Optional</sup> <a name="BootstrapClusterMembershipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.bootstrapClusterMembershipInput"></a>

```csharp
public string BootstrapClusterMembershipInput { get; }
```

- *Type:* string

---

##### `ControlPlaneNodeInput`<sup>Optional</sup> <a name="ControlPlaneNodeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.controlPlaneNodeInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterControlPlaneNode ControlPlaneNodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.loadBalancerInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancer LoadBalancerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.networkConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a>

---

##### `OnPremVersionInput`<sup>Optional</sup> <a name="OnPremVersionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.onPremVersionInput"></a>

```csharp
public string OnPremVersionInput { get; }
```

- *Type:* string

---

##### `PlatformConfigInput`<sup>Optional</sup> <a name="PlatformConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.platformConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfig PlatformConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VcenterInput`<sup>Optional</sup> <a name="VcenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.vcenterInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterVcenter VcenterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BootstrapClusterMembership`<sup>Required</sup> <a name="BootstrapClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.bootstrapClusterMembership"></a>

```csharp
public string BootstrapClusterMembership { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.onPremVersion"></a>

```csharp
public string OnPremVersion { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremVmwareAdminClusterAddonNode <a name="GoogleGkeonpremVmwareAdminClusterAddonNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAddonNode {
    GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig AutoResizeConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | auto_resize_config block. |

---

##### `AutoResizeConfig`<sup>Optional</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode.property.autoResizeConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig AutoResizeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

auto_resize_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#auto_resize_config GoogleGkeonpremVmwareAdminCluster#auto_resize_config}

---

### GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig <a name="GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether to enable controle plane node auto resizing. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether to enable controle plane node auto resizing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}

---

### GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups <a name="GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups {
    object AagConfigDisabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>object</code> | Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default. |

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups.property.aagConfigDisabled"></a>

```csharp
public object AagConfigDisabled { get; set; }
```

- *Type:* object

Spread nodes across at least three physical hosts (requires at least three hosts). Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#aag_config_disabled GoogleGkeonpremVmwareAdminCluster#aag_config_disabled}

---

### GoogleGkeonpremVmwareAdminClusterAuthorization <a name="GoogleGkeonpremVmwareAdminClusterAuthorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAuthorization {
    object ViewerUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization.property.viewerUsers">ViewerUsers</a></code> | <code>object</code> | viewer_users block. |

---

##### `ViewerUsers`<sup>Optional</sup> <a name="ViewerUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization.property.viewerUsers"></a>

```csharp
public object ViewerUsers { get; set; }
```

- *Type:* object

viewer_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#viewer_users GoogleGkeonpremVmwareAdminCluster#viewer_users}

---

### GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers <a name="GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers {
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username">Username</a></code> | <code>string</code> | The name of the user, e.g. 'my-gcp-id@gmail.com'. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsers.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The name of the user, e.g. 'my-gcp-id@gmail.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#username GoogleGkeonpremVmwareAdminCluster#username}

---

### GoogleGkeonpremVmwareAdminClusterAutoRepairConfig <a name="GoogleGkeonpremVmwareAdminClusterAutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAutoRepairConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether auto repair is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether auto repair is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}

---

### GoogleGkeonpremVmwareAdminClusterConfig <a name="GoogleGkeonpremVmwareAdminClusterConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    GoogleGkeonpremVmwareAdminClusterNetworkConfig NetworkConfig,
    GoogleGkeonpremVmwareAdminClusterAddonNode AddonNode = null,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups AntiAffinityGroups = null,
    GoogleGkeonpremVmwareAdminClusterAuthorization Authorization = null,
    GoogleGkeonpremVmwareAdminClusterAutoRepairConfig AutoRepairConfig = null,
    string BootstrapClusterMembership = null,
    GoogleGkeonpremVmwareAdminClusterControlPlaneNode ControlPlaneNode = null,
    string Description = null,
    string Id = null,
    string ImageType = null,
    GoogleGkeonpremVmwareAdminClusterLoadBalancer LoadBalancer = null,
    string OnPremVersion = null,
    GoogleGkeonpremVmwareAdminClusterPlatformConfig PlatformConfig = null,
    string Project = null,
    GoogleGkeonpremVmwareAdminClusterTimeouts Timeouts = null,
    GoogleGkeonpremVmwareAdminClusterVcenter Vcenter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.name">Name</a></code> | <code>string</code> | The VMware admin cluster resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.addonNode">AddonNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a></code> | addon_node block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations on the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups">AntiAffinityGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | anti_affinity_groups block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.authorization">Authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.autoRepairConfig">AutoRepairConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | auto_repair_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership">BootstrapClusterMembership</a></code> | <code>string</code> | The bootstrap cluster this VMware admin cluster belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.controlPlaneNode">ControlPlaneNode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a></code> | control_plane_node block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.description">Description</a></code> | <code>string</code> | A human readable description of this VMware admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#id GoogleGkeonpremVmwareAdminCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.imageType">ImageType</a></code> | <code>string</code> | The OS image type for the VMware admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.onPremVersion">OnPremVersion</a></code> | <code>string</code> | The Anthos clusters on the VMware version for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.platformConfig">PlatformConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a></code> | platform_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#project GoogleGkeonpremVmwareAdminCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts">GoogleGkeonpremVmwareAdminClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.vcenter">Vcenter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a></code> | vcenter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#location GoogleGkeonpremVmwareAdminCluster#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The VMware admin cluster resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#name GoogleGkeonpremVmwareAdminCluster#name}

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.networkConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#network_config GoogleGkeonpremVmwareAdminCluster#network_config}

---

##### `AddonNode`<sup>Optional</sup> <a name="AddonNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.addonNode"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNode AddonNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a>

addon_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#addon_node GoogleGkeonpremVmwareAdminCluster#addon_node}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations on the VMware Admin Cluster.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#annotations GoogleGkeonpremVmwareAdminCluster#annotations}

---

##### `AntiAffinityGroups`<sup>Optional</sup> <a name="AntiAffinityGroups" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.antiAffinityGroups"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups AntiAffinityGroups { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a>

anti_affinity_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#anti_affinity_groups GoogleGkeonpremVmwareAdminCluster#anti_affinity_groups}

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.authorization"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAuthorization Authorization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#authorization GoogleGkeonpremVmwareAdminCluster#authorization}

---

##### `AutoRepairConfig`<sup>Optional</sup> <a name="AutoRepairConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.autoRepairConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAutoRepairConfig AutoRepairConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a>

auto_repair_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#auto_repair_config GoogleGkeonpremVmwareAdminCluster#auto_repair_config}

---

##### `BootstrapClusterMembership`<sup>Optional</sup> <a name="BootstrapClusterMembership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.bootstrapClusterMembership"></a>

```csharp
public string BootstrapClusterMembership { get; set; }
```

- *Type:* string

The bootstrap cluster this VMware admin cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#bootstrap_cluster_membership GoogleGkeonpremVmwareAdminCluster#bootstrap_cluster_membership}

---

##### `ControlPlaneNode`<sup>Optional</sup> <a name="ControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.controlPlaneNode"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterControlPlaneNode ControlPlaneNode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a>

control_plane_node block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_node GoogleGkeonpremVmwareAdminCluster#control_plane_node}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human readable description of this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#description GoogleGkeonpremVmwareAdminCluster#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#id GoogleGkeonpremVmwareAdminCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

The OS image type for the VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#image_type GoogleGkeonpremVmwareAdminCluster#image_type}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.loadBalancer"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancer LoadBalancer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#load_balancer GoogleGkeonpremVmwareAdminCluster#load_balancer}

---

##### `OnPremVersion`<sup>Optional</sup> <a name="OnPremVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.onPremVersion"></a>

```csharp
public string OnPremVersion { get; set; }
```

- *Type:* string

The Anthos clusters on the VMware version for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#on_prem_version GoogleGkeonpremVmwareAdminCluster#on_prem_version}

---

##### `PlatformConfig`<sup>Optional</sup> <a name="PlatformConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.platformConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfig PlatformConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#platform_config GoogleGkeonpremVmwareAdminCluster#platform_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#project GoogleGkeonpremVmwareAdminCluster#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.timeouts"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts">GoogleGkeonpremVmwareAdminClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#timeouts GoogleGkeonpremVmwareAdminCluster#timeouts}

---

##### `Vcenter`<sup>Optional</sup> <a name="Vcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterConfig.property.vcenter"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterVcenter Vcenter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a>

vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#vcenter GoogleGkeonpremVmwareAdminCluster#vcenter}

---

### GoogleGkeonpremVmwareAdminClusterControlPlaneNode <a name="GoogleGkeonpremVmwareAdminClusterControlPlaneNode" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterControlPlaneNode {
    double Cpus = null,
    double Memory = null,
    double Replicas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.property.cpus">Cpus</a></code> | <code>double</code> | The number of vCPUs for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.property.memory">Memory</a></code> | <code>double</code> | The number of mebibytes of memory for the control-plane node of the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.property.replicas">Replicas</a></code> | <code>double</code> | The number of control plane nodes for this VMware admin cluster. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.property.cpus"></a>

```csharp
public double Cpus { get; set; }
```

- *Type:* double

The number of vCPUs for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#cpus GoogleGkeonpremVmwareAdminCluster#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

The number of mebibytes of memory for the control-plane node of the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#memory GoogleGkeonpremVmwareAdminCluster#memory}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

The number of control plane nodes for this VMware admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#replicas GoogleGkeonpremVmwareAdminCluster#replicas}

---

### GoogleGkeonpremVmwareAdminClusterFleet <a name="GoogleGkeonpremVmwareAdminClusterFleet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterFleet {

};
```


### GoogleGkeonpremVmwareAdminClusterLoadBalancer <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancer {
    GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig VipConfig,
    GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config F5Config = null,
    GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig ManualLbConfig = null,
    GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig MetalLbConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | vip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | f5_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | manual_lb_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | metal_lb_config block. |

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.vipConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig VipConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

vip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#vip_config GoogleGkeonpremVmwareAdminCluster#vip_config}

---

##### `F5Config`<sup>Optional</sup> <a name="F5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.f5Config"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config F5Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

f5_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#f5_config GoogleGkeonpremVmwareAdminCluster#f5_config}

---

##### `ManualLbConfig`<sup>Optional</sup> <a name="ManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.manualLbConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig ManualLbConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

manual_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#manual_lb_config GoogleGkeonpremVmwareAdminCluster#manual_lb_config}

---

##### `MetalLbConfig`<sup>Optional</sup> <a name="MetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer.property.metalLbConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig MetalLbConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

metal_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#metal_lb_config GoogleGkeonpremVmwareAdminCluster#metal_lb_config}

---

### GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config {
    string Address = null,
    string Partition = null,
    string SnatPool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address">Address</a></code> | <code>string</code> | The load balancer's IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition">Partition</a></code> | <code>string</code> | he preexisting partition to be used by the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool">SnatPool</a></code> | <code>string</code> | The pool name. Only necessary, if using SNAT. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The load balancer's IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#address GoogleGkeonpremVmwareAdminCluster#address}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

he preexisting partition to be used by the load balancer.

T
his partition is usually created for the admin cluster for example:
'my-f5-admin-partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#partition GoogleGkeonpremVmwareAdminCluster#partition}

---

##### `SnatPool`<sup>Optional</sup> <a name="SnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config.property.snatPool"></a>

```csharp
public string SnatPool { get; set; }
```

- *Type:* string

The pool name. Only necessary, if using SNAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#snat_pool GoogleGkeonpremVmwareAdminCluster#snat_pool}

---

### GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig {
    double AddonsNodePort = null,
    double ControlPlaneNodePort = null,
    double IngressHttpNodePort = null,
    double IngressHttpsNodePort = null,
    double KonnectivityServerNodePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort">AddonsNodePort</a></code> | <code>double</code> | NodePort for add-ons server in the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>double</code> | NodePort for control plane service. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>double</code> | NodePort for ingress service's http. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>double</code> | NodePort for ingress service's https. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>double</code> | NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564). |

---

##### `AddonsNodePort`<sup>Optional</sup> <a name="AddonsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.addonsNodePort"></a>

```csharp
public double AddonsNodePort { get; set; }
```

- *Type:* double

NodePort for add-ons server in the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#addons_node_port GoogleGkeonpremVmwareAdminCluster#addons_node_port}

---

##### `ControlPlaneNodePort`<sup>Optional</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.controlPlaneNodePort"></a>

```csharp
public double ControlPlaneNodePort { get; set; }
```

- *Type:* double

NodePort for control plane service.

The Kubernetes API server in the admin
cluster is implemented as a Service of type NodePort (ex. 30968).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_node_port GoogleGkeonpremVmwareAdminCluster#control_plane_node_port}

---

##### `IngressHttpNodePort`<sup>Optional</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpNodePort"></a>

```csharp
public double IngressHttpNodePort { get; set; }
```

- *Type:* double

NodePort for ingress service's http.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 32527).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ingress_http_node_port GoogleGkeonpremVmwareAdminCluster#ingress_http_node_port}

---

##### `IngressHttpsNodePort`<sup>Optional</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.ingressHttpsNodePort"></a>

```csharp
public double IngressHttpsNodePort { get; set; }
```

- *Type:* double

NodePort for ingress service's https.

The ingress service in the admin
cluster is implemented as a Service of type NodePort (ex. 30139).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ingress_https_node_port GoogleGkeonpremVmwareAdminCluster#ingress_https_node_port}

---

##### `KonnectivityServerNodePort`<sup>Optional</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig.property.konnectivityServerNodePort"></a>

```csharp
public double KonnectivityServerNodePort { get; set; }
```

- *Type:* double

NodePort for konnectivity server service running as a sidecar in each kube-apiserver pod (ex. 30564).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#konnectivity_server_node_port GoogleGkeonpremVmwareAdminCluster#konnectivity_server_node_port}

---

### GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled">Enabled</a></code> | <code>object</code> | Metal LB is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Metal LB is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}

---

### GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig {
    string ControlPlaneVip,
    string AddonsVip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>string</code> | The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip">AddonsVip</a></code> | <code>string</code> | The VIP to configure the load balancer for add-ons. |

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.controlPlaneVip"></a>

```csharp
public string ControlPlaneVip { get; set; }
```

- *Type:* string

The VIP which you previously set aside for the Kubernetes API of this VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_vip GoogleGkeonpremVmwareAdminCluster#control_plane_vip}

---

##### `AddonsVip`<sup>Optional</sup> <a name="AddonsVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig.property.addonsVip"></a>

```csharp
public string AddonsVip { get; set; }
```

- *Type:* string

The VIP to configure the load balancer for add-ons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#addons_vip GoogleGkeonpremVmwareAdminCluster#addons_vip}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfig <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfig {
    string[] PodAddressCidrBlocks,
    string[] ServiceAddressCidrBlocks,
    GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig DhcpIpConfig = null,
    GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig HaControlPlaneConfig = null,
    GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig HostConfig = null,
    GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig StaticIpConfig = null,
    string VcenterNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | dhcp_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig">HaControlPlaneConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | ha_control_plane_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | host_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | static_ip_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork">VcenterNetwork</a></code> | <code>string</code> | vcenter_network specifies vCenter network name. |

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; set; }
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#pod_address_cidr_blocks GoogleGkeonpremVmwareAdminCluster#pod_address_cidr_blocks}

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; set; }
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported.. This field
cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#service_address_cidr_blocks GoogleGkeonpremVmwareAdminCluster#service_address_cidr_blocks}

---

##### `DhcpIpConfig`<sup>Optional</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.dhcpIpConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig DhcpIpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

dhcp_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#dhcp_ip_config GoogleGkeonpremVmwareAdminCluster#dhcp_ip_config}

---

##### `HaControlPlaneConfig`<sup>Optional</sup> <a name="HaControlPlaneConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.haControlPlaneConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig HaControlPlaneConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

ha_control_plane_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ha_control_plane_config GoogleGkeonpremVmwareAdminCluster#ha_control_plane_config}

---

##### `HostConfig`<sup>Optional</sup> <a name="HostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.hostConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig HostConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

host_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#host_config GoogleGkeonpremVmwareAdminCluster#host_config}

---

##### `StaticIpConfig`<sup>Optional</sup> <a name="StaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.staticIpConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig StaticIpConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

static_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#static_ip_config GoogleGkeonpremVmwareAdminCluster#static_ip_config}

---

##### `VcenterNetwork`<sup>Optional</sup> <a name="VcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig.property.vcenterNetwork"></a>

```csharp
public string VcenterNetwork { get; set; }
```

- *Type:* string

vcenter_network specifies vCenter network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#vcenter_network GoogleGkeonpremVmwareAdminCluster#vcenter_network}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled">Enabled</a></code> | <code>object</code> | enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

enabled is a flag to mark if DHCP IP allocation is used for VMware admin clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#enabled GoogleGkeonpremVmwareAdminCluster#enabled}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig {
    GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock ControlPlaneIpBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | control_plane_ip_block block. |

---

##### `ControlPlaneIpBlock`<sup>Optional</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig.property.controlPlaneIpBlock"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock ControlPlaneIpBlock { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

control_plane_ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#control_plane_ip_block GoogleGkeonpremVmwareAdminCluster#control_plane_ip_block}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock {
    string Gateway,
    object Ips,
    string Netmask
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway">Gateway</a></code> | <code>string</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips">Ips</a></code> | <code>object</code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask">Netmask</a></code> | <code>string</code> | The netmask used by the VMware Admin Cluster. |

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#gateway GoogleGkeonpremVmwareAdminCluster#gateway}

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.ips"></a>

```csharp
public object Ips { get; set; }
```

- *Type:* object

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ips GoogleGkeonpremVmwareAdminCluster#ips}

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#netmask GoogleGkeonpremVmwareAdminCluster#netmask}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps {
    string Ip,
    string Hostname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip">Ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname">Hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ip GoogleGkeonpremVmwareAdminCluster#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIps.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#hostname GoogleGkeonpremVmwareAdminCluster#hostname}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig {
    string[] DnsSearchDomains = null,
    string[] DnsServers = null,
    string[] NtpServers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>string[]</code> | DNS search domains. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | DNS servers. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers">NtpServers</a></code> | <code>string[]</code> | NTP servers. |

---

##### `DnsSearchDomains`<sup>Optional</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsSearchDomains"></a>

```csharp
public string[] DnsSearchDomains { get; set; }
```

- *Type:* string[]

DNS search domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#dns_search_domains GoogleGkeonpremVmwareAdminCluster#dns_search_domains}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#dns_servers GoogleGkeonpremVmwareAdminCluster#dns_servers}

---

##### `NtpServers`<sup>Optional</sup> <a name="NtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig.property.ntpServers"></a>

```csharp
public string[] NtpServers { get; set; }
```

- *Type:* string[]

NTP servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ntp_servers GoogleGkeonpremVmwareAdminCluster#ntp_servers}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig {
    object IpBlocks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks">IpBlocks</a></code> | <code>object</code> | ip_blocks block. |

---

##### `IpBlocks`<sup>Optional</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig.property.ipBlocks"></a>

```csharp
public object IpBlocks { get; set; }
```

- *Type:* object

ip_blocks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ip_blocks GoogleGkeonpremVmwareAdminCluster#ip_blocks}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks {
    string Gateway,
    object Ips,
    string Netmask
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway">Gateway</a></code> | <code>string</code> | The network gateway used by the VMware Admin Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips">Ips</a></code> | <code>object</code> | ips block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask">Netmask</a></code> | <code>string</code> | The netmask used by the VMware Admin Cluster. |

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

The network gateway used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#gateway GoogleGkeonpremVmwareAdminCluster#gateway}

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.ips"></a>

```csharp
public object Ips { get; set; }
```

- *Type:* object

ips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ips GoogleGkeonpremVmwareAdminCluster#ips}

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocks.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

The netmask used by the VMware Admin Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#netmask GoogleGkeonpremVmwareAdminCluster#netmask}

---

### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps {
    string Ip,
    string Hostname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip">Ip</a></code> | <code>string</code> | IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname">Hostname</a></code> | <code>string</code> | Hostname of the machine. VM's name will be used if this field is empty. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ip GoogleGkeonpremVmwareAdminCluster#ip}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIps.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Hostname of the machine. VM's name will be used if this field is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#hostname GoogleGkeonpremVmwareAdminCluster#hostname}

---

### GoogleGkeonpremVmwareAdminClusterPlatformConfig <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfig {
    string RequiredPlatformVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion">RequiredPlatformVersion</a></code> | <code>string</code> | The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle. |

---

##### `RequiredPlatformVersion`<sup>Optional</sup> <a name="RequiredPlatformVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig.property.requiredPlatformVersion"></a>

```csharp
public string RequiredPlatformVersion { get; set; }
```

- *Type:* string

The required platform version e.g. 1.13.1. If the current platform version is lower than the target version, the platform version will be updated to the target version. If the target version is not installed in the platform (bundle versions), download the target version bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#required_platform_version GoogleGkeonpremVmwareAdminCluster#required_platform_version}

---

### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles {

};
```


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus {

};
```


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions {

};
```


### GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus {

};
```


### GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions {

};
```


### GoogleGkeonpremVmwareAdminClusterStatus <a name="GoogleGkeonpremVmwareAdminClusterStatus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterStatus {

};
```


### GoogleGkeonpremVmwareAdminClusterStatusConditions <a name="GoogleGkeonpremVmwareAdminClusterStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterStatusConditions {

};
```


### GoogleGkeonpremVmwareAdminClusterTimeouts <a name="GoogleGkeonpremVmwareAdminClusterTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#create GoogleGkeonpremVmwareAdminCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#delete GoogleGkeonpremVmwareAdminCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#update GoogleGkeonpremVmwareAdminCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#create GoogleGkeonpremVmwareAdminCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#delete GoogleGkeonpremVmwareAdminCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#update GoogleGkeonpremVmwareAdminCluster#update}.

---

### GoogleGkeonpremVmwareAdminClusterVcenter <a name="GoogleGkeonpremVmwareAdminClusterVcenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterVcenter {
    string Address = null,
    string CaCertData = null,
    string Cluster = null,
    string Datacenter = null,
    string DataDisk = null,
    string Datastore = null,
    string Folder = null,
    string ResourcePool = null,
    string StoragePolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.address">Address</a></code> | <code>string</code> | The vCenter IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.caCertData">CaCertData</a></code> | <code>string</code> | Contains the vCenter CA certificate public key for SSL verification. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.cluster">Cluster</a></code> | <code>string</code> | The name of the vCenter cluster for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.datacenter">Datacenter</a></code> | <code>string</code> | The name of the vCenter datacenter for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.dataDisk">DataDisk</a></code> | <code>string</code> | The name of the virtual machine disk (VMDK) for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.datastore">Datastore</a></code> | <code>string</code> | The name of the vCenter datastore for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.folder">Folder</a></code> | <code>string</code> | The name of the vCenter folder for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.resourcePool">ResourcePool</a></code> | <code>string</code> | The name of the vCenter resource pool for the admin cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.storagePolicyName">StoragePolicyName</a></code> | <code>string</code> | The name of the vCenter storage policy for the user cluster. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The vCenter IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#address GoogleGkeonpremVmwareAdminCluster#address}

---

##### `CaCertData`<sup>Optional</sup> <a name="CaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.caCertData"></a>

```csharp
public string CaCertData { get; set; }
```

- *Type:* string

Contains the vCenter CA certificate public key for SSL verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#ca_cert_data GoogleGkeonpremVmwareAdminCluster#ca_cert_data}

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The name of the vCenter cluster for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#cluster GoogleGkeonpremVmwareAdminCluster#cluster}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

The name of the vCenter datacenter for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#datacenter GoogleGkeonpremVmwareAdminCluster#datacenter}

---

##### `DataDisk`<sup>Optional</sup> <a name="DataDisk" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.dataDisk"></a>

```csharp
public string DataDisk { get; set; }
```

- *Type:* string

The name of the virtual machine disk (VMDK) for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#data_disk GoogleGkeonpremVmwareAdminCluster#data_disk}

---

##### `Datastore`<sup>Optional</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.datastore"></a>

```csharp
public string Datastore { get; set; }
```

- *Type:* string

The name of the vCenter datastore for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#datastore GoogleGkeonpremVmwareAdminCluster#datastore}

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The name of the vCenter folder for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#folder GoogleGkeonpremVmwareAdminCluster#folder}

---

##### `ResourcePool`<sup>Optional</sup> <a name="ResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.resourcePool"></a>

```csharp
public string ResourcePool { get; set; }
```

- *Type:* string

The name of the vCenter resource pool for the admin cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#resource_pool GoogleGkeonpremVmwareAdminCluster#resource_pool}

---

##### `StoragePolicyName`<sup>Optional</sup> <a name="StoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter.property.storagePolicyName"></a>

```csharp
public string StoragePolicyName { get; set; }
```

- *Type:* string

The name of the vCenter storage policy for the user cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gkeonprem_vmware_admin_cluster#storage_policy_name GoogleGkeonpremVmwareAdminCluster#storage_policy_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference <a name="GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig">PutAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig">ResetAutoResizeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoResizeConfig` <a name="PutAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig"></a>

```csharp
private void PutAutoResizeConfig(GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.putAutoResizeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `ResetAutoResizeConfig` <a name="ResetAutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.resetAutoResizeConfig"></a>

```csharp
private void ResetAutoResizeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig">AutoResizeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput">AutoResizeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResizeConfig`<sup>Required</sup> <a name="AutoResizeConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference AutoResizeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfigOutputReference</a>

---

##### `AutoResizeConfigInput`<sup>Optional</sup> <a name="AutoResizeConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.autoResizeConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig AutoResizeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig">GoogleGkeonpremVmwareAdminClusterAddonNodeAutoResizeConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNodeOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAddonNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAddonNode">GoogleGkeonpremVmwareAdminClusterAddonNode</a>

---


### GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput">AagConfigDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled">AagConfigDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AagConfigDisabledInput`<sup>Optional</sup> <a name="AagConfigDisabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabledInput"></a>

```csharp
public object AagConfigDisabledInput { get; }
```

- *Type:* object

---

##### `AagConfigDisabled`<sup>Required</sup> <a name="AagConfigDisabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.aagConfigDisabled"></a>

```csharp
public object AagConfigDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroupsOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups">GoogleGkeonpremVmwareAdminClusterAntiAffinityGroups</a>

---


### GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference <a name="GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers">PutViewerUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers">ResetViewerUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutViewerUsers` <a name="PutViewerUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers"></a>

```csharp
private void PutViewerUsers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.putViewerUsers.parameter.value"></a>

- *Type:* object

---

##### `ResetViewerUsers` <a name="ResetViewerUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.resetViewerUsers"></a>

```csharp
private void ResetViewerUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers">ViewerUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput">ViewerUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ViewerUsers`<sup>Required</sup> <a name="ViewerUsers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsers"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList ViewerUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList">GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList</a>

---

##### `ViewerUsersInput`<sup>Optional</sup> <a name="ViewerUsersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.viewerUsersInput"></a>

```csharp
public object ViewerUsersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorization">GoogleGkeonpremVmwareAdminClusterAuthorization</a>

---


### GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList <a name="GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference <a name="GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAuthorizationViewerUsersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterAutoRepairConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterAutoRepairConfig">GoogleGkeonpremVmwareAdminClusterAutoRepairConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference <a name="GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetCpus"></a>

```csharp
private void ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput">CpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus">Cpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpusInput"></a>

```csharp
public double CpusInput { get; }
```

- *Type:* double

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.cpus"></a>

```csharp
public double Cpus { get; }
```

- *Type:* double

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNodeOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterControlPlaneNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterControlPlaneNode">GoogleGkeonpremVmwareAdminClusterControlPlaneNode</a>

---


### GoogleGkeonpremVmwareAdminClusterFleetList <a name="GoogleGkeonpremVmwareAdminClusterFleetList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterFleetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterFleetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterFleetOutputReference <a name="GoogleGkeonpremVmwareAdminClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterFleetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleet">GoogleGkeonpremVmwareAdminClusterFleet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleetOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterFleet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterFleet">GoogleGkeonpremVmwareAdminClusterFleet</a>

---


### GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool">ResetSnatPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetSnatPool` <a name="ResetSnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.resetSnatPool"></a>

```csharp
private void ResetSnatPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput">SnatPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool">SnatPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `SnatPoolInput`<sup>Optional</sup> <a name="SnatPoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPoolInput"></a>

```csharp
public string SnatPoolInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `SnatPool`<sup>Required</sup> <a name="SnatPool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.snatPool"></a>

```csharp
public string SnatPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---


### GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort">ResetAddonsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort">ResetControlPlaneNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort">ResetIngressHttpNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort">ResetIngressHttpsNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort">ResetKonnectivityServerNodePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddonsNodePort` <a name="ResetAddonsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetAddonsNodePort"></a>

```csharp
private void ResetAddonsNodePort()
```

##### `ResetControlPlaneNodePort` <a name="ResetControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetControlPlaneNodePort"></a>

```csharp
private void ResetControlPlaneNodePort()
```

##### `ResetIngressHttpNodePort` <a name="ResetIngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpNodePort"></a>

```csharp
private void ResetIngressHttpNodePort()
```

##### `ResetIngressHttpsNodePort` <a name="ResetIngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetIngressHttpsNodePort"></a>

```csharp
private void ResetIngressHttpsNodePort()
```

##### `ResetKonnectivityServerNodePort` <a name="ResetKonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.resetKonnectivityServerNodePort"></a>

```csharp
private void ResetKonnectivityServerNodePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput">AddonsNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput">ControlPlaneNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput">IngressHttpNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput">IngressHttpsNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput">KonnectivityServerNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort">AddonsNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort">ControlPlaneNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort">IngressHttpNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort">IngressHttpsNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort">KonnectivityServerNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddonsNodePortInput`<sup>Optional</sup> <a name="AddonsNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePortInput"></a>

```csharp
public double AddonsNodePortInput { get; }
```

- *Type:* double

---

##### `ControlPlaneNodePortInput`<sup>Optional</sup> <a name="ControlPlaneNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePortInput"></a>

```csharp
public double ControlPlaneNodePortInput { get; }
```

- *Type:* double

---

##### `IngressHttpNodePortInput`<sup>Optional</sup> <a name="IngressHttpNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePortInput"></a>

```csharp
public double IngressHttpNodePortInput { get; }
```

- *Type:* double

---

##### `IngressHttpsNodePortInput`<sup>Optional</sup> <a name="IngressHttpsNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePortInput"></a>

```csharp
public double IngressHttpsNodePortInput { get; }
```

- *Type:* double

---

##### `KonnectivityServerNodePortInput`<sup>Optional</sup> <a name="KonnectivityServerNodePortInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePortInput"></a>

```csharp
public double KonnectivityServerNodePortInput { get; }
```

- *Type:* double

---

##### `AddonsNodePort`<sup>Required</sup> <a name="AddonsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.addonsNodePort"></a>

```csharp
public double AddonsNodePort { get; }
```

- *Type:* double

---

##### `ControlPlaneNodePort`<sup>Required</sup> <a name="ControlPlaneNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.controlPlaneNodePort"></a>

```csharp
public double ControlPlaneNodePort { get; }
```

- *Type:* double

---

##### `IngressHttpNodePort`<sup>Required</sup> <a name="IngressHttpNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpNodePort"></a>

```csharp
public double IngressHttpNodePort { get; }
```

- *Type:* double

---

##### `IngressHttpsNodePort`<sup>Required</sup> <a name="IngressHttpsNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.ingressHttpsNodePort"></a>

```csharp
public double IngressHttpsNodePort { get; }
```

- *Type:* double

---

##### `KonnectivityServerNodePort`<sup>Required</sup> <a name="KonnectivityServerNodePort" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.konnectivityServerNodePort"></a>

```csharp
public double KonnectivityServerNodePort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config">PutF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig">PutManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig">PutMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig">PutVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config">ResetF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig">ResetManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig">ResetMetalLbConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutF5Config` <a name="PutF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config"></a>

```csharp
private void PutF5Config(GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putF5Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `PutManualLbConfig` <a name="PutManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig"></a>

```csharp
private void PutManualLbConfig(GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putManualLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `PutMetalLbConfig` <a name="PutMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig"></a>

```csharp
private void PutMetalLbConfig(GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putMetalLbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `PutVipConfig` <a name="PutVipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig"></a>

```csharp
private void PutVipConfig(GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.putVipConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `ResetF5Config` <a name="ResetF5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetF5Config"></a>

```csharp
private void ResetF5Config()
```

##### `ResetManualLbConfig` <a name="ResetManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetManualLbConfig"></a>

```csharp
private void ResetManualLbConfig()
```

##### `ResetMetalLbConfig` <a name="ResetMetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.resetMetalLbConfig"></a>

```csharp
private void ResetMetalLbConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config">F5Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig">ManualLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig">MetalLbConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig">VipConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput">F5ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput">ManualLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput">MetalLbConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput">VipConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `F5Config`<sup>Required</sup> <a name="F5Config" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5Config"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference F5Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5ConfigOutputReference</a>

---

##### `ManualLbConfig`<sup>Required</sup> <a name="ManualLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference ManualLbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfigOutputReference</a>

---

##### `MetalLbConfig`<sup>Required</sup> <a name="MetalLbConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference MetalLbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfigOutputReference</a>

---

##### `VipConfig`<sup>Required</sup> <a name="VipConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference VipConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference</a>

---

##### `F5ConfigInput`<sup>Optional</sup> <a name="F5ConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.f5ConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config F5ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config">GoogleGkeonpremVmwareAdminClusterLoadBalancerF5Config</a>

---

##### `ManualLbConfigInput`<sup>Optional</sup> <a name="ManualLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.manualLbConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig ManualLbConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerManualLbConfig</a>

---

##### `MetalLbConfigInput`<sup>Optional</sup> <a name="MetalLbConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.metalLbConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig MetalLbConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerMetalLbConfig</a>

---

##### `VipConfigInput`<sup>Optional</sup> <a name="VipConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.vipConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig VipConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancer">GoogleGkeonpremVmwareAdminClusterLoadBalancer</a>

---


### GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip">ResetAddonsVip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddonsVip` <a name="ResetAddonsVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.resetAddonsVip"></a>

```csharp
private void ResetAddonsVip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput">AddonsVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput">ControlPlaneVipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip">AddonsVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip">ControlPlaneVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddonsVipInput`<sup>Optional</sup> <a name="AddonsVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVipInput"></a>

```csharp
public string AddonsVipInput { get; }
```

- *Type:* string

---

##### `ControlPlaneVipInput`<sup>Optional</sup> <a name="ControlPlaneVipInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVipInput"></a>

```csharp
public string ControlPlaneVipInput { get; }
```

- *Type:* string

---

##### `AddonsVip`<sup>Required</sup> <a name="AddonsVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.addonsVip"></a>

```csharp
public string AddonsVip { get; }
```

- *Type:* string

---

##### `ControlPlaneVip`<sup>Required</sup> <a name="ControlPlaneVip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.controlPlaneVip"></a>

```csharp
public string ControlPlaneVip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig">GoogleGkeonpremVmwareAdminClusterLoadBalancerVipConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps">PutIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps"></a>

```csharp
private void PutIps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.putIps.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput">IpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ips"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList Ips { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.ipsInput"></a>

```csharp
public object IpsInput { get; }
```

- *Type:* object

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock">PutControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock">ResetControlPlaneIpBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPlaneIpBlock` <a name="PutControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock"></a>

```csharp
private void PutControlPlaneIpBlock(GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.putControlPlaneIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `ResetControlPlaneIpBlock` <a name="ResetControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.resetControlPlaneIpBlock"></a>

```csharp
private void ResetControlPlaneIpBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock">ControlPlaneIpBlock</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput">ControlPlaneIpBlockInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlPlaneIpBlock`<sup>Required</sup> <a name="ControlPlaneIpBlock" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlock"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference ControlPlaneIpBlock { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlockOutputReference</a>

---

##### `ControlPlaneIpBlockInput`<sup>Optional</sup> <a name="ControlPlaneIpBlockInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.controlPlaneIpBlockInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock ControlPlaneIpBlockInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigControlPlaneIpBlock</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains">ResetDnsSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers">ResetNtpServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsSearchDomains` <a name="ResetDnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsSearchDomains"></a>

```csharp
private void ResetDnsSearchDomains()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetNtpServers` <a name="ResetNtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.resetNtpServers"></a>

```csharp
private void ResetNtpServers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput">DnsSearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput">NtpServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains">DnsSearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers">NtpServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsSearchDomainsInput`<sup>Optional</sup> <a name="DnsSearchDomainsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomainsInput"></a>

```csharp
public string[] DnsSearchDomainsInput { get; }
```

- *Type:* string[]

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `NtpServersInput`<sup>Optional</sup> <a name="NtpServersInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServersInput"></a>

```csharp
public string[] NtpServersInput { get; }
```

- *Type:* string[]

---

##### `DnsSearchDomains`<sup>Required</sup> <a name="DnsSearchDomains" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsSearchDomains"></a>

```csharp
public string[] DnsSearchDomains { get; }
```

- *Type:* string[]

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `NtpServers`<sup>Required</sup> <a name="NtpServers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.ntpServers"></a>

```csharp
public string[] NtpServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig">PutDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig">PutHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig">PutHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig">PutStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig">ResetDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig">ResetHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig">ResetHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig">ResetStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork">ResetVcenterNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDhcpIpConfig` <a name="PutDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig"></a>

```csharp
private void PutDhcpIpConfig(GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putDhcpIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `PutHaControlPlaneConfig` <a name="PutHaControlPlaneConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig"></a>

```csharp
private void PutHaControlPlaneConfig(GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHaControlPlaneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `PutHostConfig` <a name="PutHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig"></a>

```csharp
private void PutHostConfig(GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putHostConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `PutStaticIpConfig` <a name="PutStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig"></a>

```csharp
private void PutStaticIpConfig(GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.putStaticIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `ResetDhcpIpConfig` <a name="ResetDhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetDhcpIpConfig"></a>

```csharp
private void ResetDhcpIpConfig()
```

##### `ResetHaControlPlaneConfig` <a name="ResetHaControlPlaneConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHaControlPlaneConfig"></a>

```csharp
private void ResetHaControlPlaneConfig()
```

##### `ResetHostConfig` <a name="ResetHostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetHostConfig"></a>

```csharp
private void ResetHostConfig()
```

##### `ResetStaticIpConfig` <a name="ResetStaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetStaticIpConfig"></a>

```csharp
private void ResetStaticIpConfig()
```

##### `ResetVcenterNetwork` <a name="ResetVcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.resetVcenterNetwork"></a>

```csharp
private void ResetVcenterNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig">DhcpIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig">HaControlPlaneConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig">HostConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig">StaticIpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput">DhcpIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput">HaControlPlaneConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput">HostConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput">PodAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput">ServiceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput">StaticIpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput">VcenterNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks">PodAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks">ServiceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork">VcenterNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhcpIpConfig`<sup>Required</sup> <a name="DhcpIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference DhcpIpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfigOutputReference</a>

---

##### `HaControlPlaneConfig`<sup>Required</sup> <a name="HaControlPlaneConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference HaControlPlaneConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfigOutputReference</a>

---

##### `HostConfig`<sup>Required</sup> <a name="HostConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference HostConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfigOutputReference</a>

---

##### `StaticIpConfig`<sup>Required</sup> <a name="StaticIpConfig" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfig"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference StaticIpConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference</a>

---

##### `DhcpIpConfigInput`<sup>Optional</sup> <a name="DhcpIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.dhcpIpConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig DhcpIpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigDhcpIpConfig</a>

---

##### `HaControlPlaneConfigInput`<sup>Optional</sup> <a name="HaControlPlaneConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.haControlPlaneConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig HaControlPlaneConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHaControlPlaneConfig</a>

---

##### `HostConfigInput`<sup>Optional</sup> <a name="HostConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.hostConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig HostConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigHostConfig</a>

---

##### `PodAddressCidrBlocksInput`<sup>Optional</sup> <a name="PodAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocksInput"></a>

```csharp
public string[] PodAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocksInput`<sup>Optional</sup> <a name="ServiceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocksInput"></a>

```csharp
public string[] ServiceAddressCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `StaticIpConfigInput`<sup>Optional</sup> <a name="StaticIpConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.staticIpConfigInput"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig StaticIpConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---

##### `VcenterNetworkInput`<sup>Optional</sup> <a name="VcenterNetworkInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetworkInput"></a>

```csharp
public string VcenterNetworkInput { get; }
```

- *Type:* string

---

##### `PodAddressCidrBlocks`<sup>Required</sup> <a name="PodAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.podAddressCidrBlocks"></a>

```csharp
public string[] PodAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `ServiceAddressCidrBlocks`<sup>Required</sup> <a name="ServiceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.serviceAddressCidrBlocks"></a>

```csharp
public string[] ServiceAddressCidrBlocks { get; }
```

- *Type:* string[]

---

##### `VcenterNetwork`<sup>Required</sup> <a name="VcenterNetwork" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.vcenterNetwork"></a>

```csharp
public string VcenterNetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps">PutIps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIps` <a name="PutIps" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps"></a>

```csharp
private void PutIps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.putIps.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips">Ips</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput">IpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ips"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList Ips { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksIpsList</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.ipsInput"></a>

```csharp
public object IpsInput { get; }
```

- *Type:* object

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks">PutIpBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks">ResetIpBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpBlocks` <a name="PutIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks"></a>

```csharp
private void PutIpBlocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.putIpBlocks.parameter.value"></a>

- *Type:* object

---

##### `ResetIpBlocks` <a name="ResetIpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.resetIpBlocks"></a>

```csharp
private void ResetIpBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks">IpBlocks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput">IpBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpBlocks`<sup>Required</sup> <a name="IpBlocks" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocks"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList IpBlocks { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigIpBlocksList</a>

---

##### `IpBlocksInput`<sup>Optional</sup> <a name="IpBlocksInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.ipBlocksInput"></a>

```csharp
public object IpBlocksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig">GoogleGkeonpremVmwareAdminClusterNetworkConfigStaticIpConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.status"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundles</a>

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditions</a>

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.conditions"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesStatus</a>

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion">ResetRequiredPlatformVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequiredPlatformVersion` <a name="ResetRequiredPlatformVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.resetRequiredPlatformVersion"></a>

```csharp
private void ResetRequiredPlatformVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles">Bundles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput">RequiredPlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion">RequiredPlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bundles`<sup>Required</sup> <a name="Bundles" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.bundles"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList Bundles { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList">GoogleGkeonpremVmwareAdminClusterPlatformConfigBundlesList</a>

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.status"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList</a>

---

##### `RequiredPlatformVersionInput`<sup>Optional</sup> <a name="RequiredPlatformVersionInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersionInput"></a>

```csharp
public string RequiredPlatformVersionInput { get; }
```

- *Type:* string

---

##### `RequiredPlatformVersion`<sup>Required</sup> <a name="RequiredPlatformVersion" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.requiredPlatformVersion"></a>

```csharp
public string RequiredPlatformVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfig">GoogleGkeonpremVmwareAdminClusterPlatformConfig</a>

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditions</a>

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference <a name="GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.conditions"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus">GoogleGkeonpremVmwareAdminClusterPlatformConfigStatus</a>

---


### GoogleGkeonpremVmwareAdminClusterStatusConditionsList <a name="GoogleGkeonpremVmwareAdminClusterStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditions">GoogleGkeonpremVmwareAdminClusterStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditions">GoogleGkeonpremVmwareAdminClusterStatusConditions</a>

---


### GoogleGkeonpremVmwareAdminClusterStatusList <a name="GoogleGkeonpremVmwareAdminClusterStatusList" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.get"></a>

```csharp
private GoogleGkeonpremVmwareAdminClusterStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremVmwareAdminClusterStatusOutputReference <a name="GoogleGkeonpremVmwareAdminClusterStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList">GoogleGkeonpremVmwareAdminClusterStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatus">GoogleGkeonpremVmwareAdminClusterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.conditions"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusConditionsList">GoogleGkeonpremVmwareAdminClusterStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterStatus">GoogleGkeonpremVmwareAdminClusterStatus</a>

---


### GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference <a name="GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremVmwareAdminClusterVcenterOutputReference <a name="GoogleGkeonpremVmwareAdminClusterVcenterOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremVmwareAdminClusterVcenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData">ResetCaCertData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk">ResetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore">ResetDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool">ResetResourcePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName">ResetStoragePolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetCaCertData` <a name="ResetCaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetCaCertData"></a>

```csharp
private void ResetCaCertData()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetDataDisk` <a name="ResetDataDisk" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetDataDisk"></a>

```csharp
private void ResetDataDisk()
```

##### `ResetDatastore` <a name="ResetDatastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetDatastore"></a>

```csharp
private void ResetDatastore()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetResourcePool` <a name="ResetResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetResourcePool"></a>

```csharp
private void ResetResourcePool()
```

##### `ResetStoragePolicyName` <a name="ResetStoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.resetStoragePolicyName"></a>

```csharp
private void ResetStoragePolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput">CaCertDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput">DataDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput">DatastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput">ResourcePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput">StoragePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData">CaCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk">DataDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore">Datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool">ResourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName">StoragePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `CaCertDataInput`<sup>Optional</sup> <a name="CaCertDataInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertDataInput"></a>

```csharp
public string CaCertDataInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDiskInput"></a>

```csharp
public string DataDiskInput { get; }
```

- *Type:* string

---

##### `DatastoreInput`<sup>Optional</sup> <a name="DatastoreInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datastoreInput"></a>

```csharp
public string DatastoreInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `ResourcePoolInput`<sup>Optional</sup> <a name="ResourcePoolInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePoolInput"></a>

```csharp
public string ResourcePoolInput { get; }
```

- *Type:* string

---

##### `StoragePolicyNameInput`<sup>Optional</sup> <a name="StoragePolicyNameInput" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyNameInput"></a>

```csharp
public string StoragePolicyNameInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `CaCertData`<sup>Required</sup> <a name="CaCertData" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.caCertData"></a>

```csharp
public string CaCertData { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.dataDisk"></a>

```csharp
public string DataDisk { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.datastore"></a>

```csharp
public string Datastore { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `ResourcePool`<sup>Required</sup> <a name="ResourcePool" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.resourcePool"></a>

```csharp
public string ResourcePool { get; }
```

- *Type:* string

---

##### `StoragePolicyName`<sup>Required</sup> <a name="StoragePolicyName" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.storagePolicyName"></a>

```csharp
public string StoragePolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenterOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremVmwareAdminClusterVcenter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremVmwareAdminCluster.GoogleGkeonpremVmwareAdminClusterVcenter">GoogleGkeonpremVmwareAdminClusterVcenter</a>

---



