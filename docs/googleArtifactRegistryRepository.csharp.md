# `googleArtifactRegistryRepository` Submodule <a name="`googleArtifactRegistryRepository` Submodule" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryRepository <a name="GoogleArtifactRegistryRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepository(Construct Scope, string Id, GoogleArtifactRegistryRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig">GoogleArtifactRegistryRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig">GoogleArtifactRegistryRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putCleanupPolicies">PutCleanupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putDockerConfig">PutDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig">PutMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig">PutRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVirtualRepositoryConfig">PutVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVulnerabilityScanningConfig">PutVulnerabilityScanningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicies">ResetCleanupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicyDryRun">ResetCleanupPolicyDryRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDockerConfig">ResetDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMavenConfig">ResetMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetRemoteRepositoryConfig">ResetRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVirtualRepositoryConfig">ResetVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVulnerabilityScanningConfig">ResetVulnerabilityScanningConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCleanupPolicies` <a name="PutCleanupPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putCleanupPolicies"></a>

```csharp
private void PutCleanupPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putCleanupPolicies.parameter.value"></a>

- *Type:* object

---

##### `PutDockerConfig` <a name="PutDockerConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putDockerConfig"></a>

```csharp
private void PutDockerConfig(GoogleArtifactRegistryRepositoryDockerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putDockerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

---

##### `PutMavenConfig` <a name="PutMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig"></a>

```csharp
private void PutMavenConfig(GoogleArtifactRegistryRepositoryMavenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---

##### `PutRemoteRepositoryConfig` <a name="PutRemoteRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig"></a>

```csharp
private void PutRemoteRepositoryConfig(GoogleArtifactRegistryRepositoryRemoteRepositoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleArtifactRegistryRepositoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>

---

##### `PutVirtualRepositoryConfig` <a name="PutVirtualRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVirtualRepositoryConfig"></a>

```csharp
private void PutVirtualRepositoryConfig(GoogleArtifactRegistryRepositoryVirtualRepositoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVirtualRepositoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `PutVulnerabilityScanningConfig` <a name="PutVulnerabilityScanningConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVulnerabilityScanningConfig"></a>

```csharp
private void PutVulnerabilityScanningConfig(GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVulnerabilityScanningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---

##### `ResetCleanupPolicies` <a name="ResetCleanupPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicies"></a>

```csharp
private void ResetCleanupPolicies()
```

##### `ResetCleanupPolicyDryRun` <a name="ResetCleanupPolicyDryRun" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicyDryRun"></a>

```csharp
private void ResetCleanupPolicyDryRun()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDockerConfig` <a name="ResetDockerConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDockerConfig"></a>

```csharp
private void ResetDockerConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMavenConfig` <a name="ResetMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMavenConfig"></a>

```csharp
private void ResetMavenConfig()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRemoteRepositoryConfig` <a name="ResetRemoteRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetRemoteRepositoryConfig"></a>

```csharp
private void ResetRemoteRepositoryConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualRepositoryConfig` <a name="ResetVirtualRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVirtualRepositoryConfig"></a>

```csharp
private void ResetVirtualRepositoryConfig()
```

##### `ResetVulnerabilityScanningConfig` <a name="ResetVulnerabilityScanningConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVulnerabilityScanningConfig"></a>

```csharp
private void ResetVulnerabilityScanningConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleArtifactRegistryRepository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleArtifactRegistryRepository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleArtifactRegistryRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicies">CleanupPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList">GoogleArtifactRegistryRepositoryCleanupPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfig">DockerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference">GoogleArtifactRegistryRepositoryDockerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfig">MavenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference">GoogleArtifactRegistryRepositoryMavenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfig">RemoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference">GoogleArtifactRegistryRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfig">VirtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfig">VulnerabilityScanningConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPoliciesInput">CleanupPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRunInput">CleanupPolicyDryRunInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfigInput">DockerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfigInput">MavenConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfigInput">RemoteRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfigInput">VirtualRepositoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfigInput">VulnerabilityScanningConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRun">CleanupPolicyDryRun</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CleanupPolicies`<sup>Required</sup> <a name="CleanupPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicies"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesList CleanupPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList">GoogleArtifactRegistryRepositoryCleanupPoliciesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DockerConfig`<sup>Required</sup> <a name="DockerConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryDockerConfigOutputReference DockerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference">GoogleArtifactRegistryRepositoryDockerConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MavenConfig`<sup>Required</sup> <a name="MavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryMavenConfigOutputReference MavenConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference">GoogleArtifactRegistryRepositoryMavenConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteRepositoryConfig`<sup>Required</sup> <a name="RemoteRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference RemoteRepositoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeouts"></a>

```csharp
public GoogleArtifactRegistryRepositoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference">GoogleArtifactRegistryRepositoryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VirtualRepositoryConfig`<sup>Required</sup> <a name="VirtualRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference VirtualRepositoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a>

---

##### `VulnerabilityScanningConfig`<sup>Required</sup> <a name="VulnerabilityScanningConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference VulnerabilityScanningConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference</a>

---

##### `CleanupPoliciesInput`<sup>Optional</sup> <a name="CleanupPoliciesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPoliciesInput"></a>

```csharp
public object CleanupPoliciesInput { get; }
```

- *Type:* object

---

##### `CleanupPolicyDryRunInput`<sup>Optional</sup> <a name="CleanupPolicyDryRunInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRunInput"></a>

```csharp
public object CleanupPolicyDryRunInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DockerConfigInput`<sup>Optional</sup> <a name="DockerConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfigInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryDockerConfig DockerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MavenConfigInput`<sup>Optional</sup> <a name="MavenConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfigInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryMavenConfig MavenConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RemoteRepositoryConfigInput`<sup>Optional</sup> <a name="RemoteRepositoryConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfigInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfig RemoteRepositoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualRepositoryConfigInput`<sup>Optional</sup> <a name="VirtualRepositoryConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfigInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryVirtualRepositoryConfig VirtualRepositoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `VulnerabilityScanningConfigInput`<sup>Optional</sup> <a name="VulnerabilityScanningConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfigInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig VulnerabilityScanningConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---

##### `CleanupPolicyDryRun`<sup>Required</sup> <a name="CleanupPolicyDryRun" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRun"></a>

```csharp
public object CleanupPolicyDryRun { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryRepositoryCleanupPolicies <a name="GoogleArtifactRegistryRepositoryCleanupPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPolicies {
    string Id,
    string Action = null,
    GoogleArtifactRegistryRepositoryCleanupPoliciesCondition Condition = null,
    GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions MostRecentVersions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.action">Action</a></code> | <code>string</code> | Policy action. Possible values: ["DELETE", "KEEP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions">MostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | most_recent_versions block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Policy action. Possible values: ["DELETE", "KEEP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#action GoogleArtifactRegistryRepository#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.condition"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#condition GoogleArtifactRegistryRepository#condition}

---

##### `MostRecentVersions`<sup>Optional</sup> <a name="MostRecentVersions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions MostRecentVersions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

most_recent_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#most_recent_versions GoogleArtifactRegistryRepository#most_recent_versions}

---

### GoogleArtifactRegistryRepositoryCleanupPoliciesCondition <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesCondition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPoliciesCondition {
    string NewerThan = null,
    string OlderThan = null,
    string[] PackageNamePrefixes = null,
    string[] TagPrefixes = null,
    string TagState = null,
    string[] VersionNamePrefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan">NewerThan</a></code> | <code>string</code> | Match versions newer than a duration. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan">OlderThan</a></code> | <code>string</code> | Match versions older than a duration. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>string[]</code> | Match versions by package prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes">TagPrefixes</a></code> | <code>string[]</code> | Match versions by tag prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState">TagState</a></code> | <code>string</code> | Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes">VersionNamePrefixes</a></code> | <code>string[]</code> | Match versions by version name prefix. Applied on any prefix match. |

---

##### `NewerThan`<sup>Optional</sup> <a name="NewerThan" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan"></a>

```csharp
public string NewerThan { get; set; }
```

- *Type:* string

Match versions newer than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#newer_than GoogleArtifactRegistryRepository#newer_than}

---

##### `OlderThan`<sup>Optional</sup> <a name="OlderThan" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan"></a>

```csharp
public string OlderThan { get; set; }
```

- *Type:* string

Match versions older than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#older_than GoogleArtifactRegistryRepository#older_than}

---

##### `PackageNamePrefixes`<sup>Optional</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes"></a>

```csharp
public string[] PackageNamePrefixes { get; set; }
```

- *Type:* string[]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}

---

##### `TagPrefixes`<sup>Optional</sup> <a name="TagPrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes"></a>

```csharp
public string[] TagPrefixes { get; set; }
```

- *Type:* string[]

Match versions by tag prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#tag_prefixes GoogleArtifactRegistryRepository#tag_prefixes}

---

##### `TagState`<sup>Optional</sup> <a name="TagState" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState"></a>

```csharp
public string TagState { get; set; }
```

- *Type:* string

Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#tag_state GoogleArtifactRegistryRepository#tag_state}

---

##### `VersionNamePrefixes`<sup>Optional</sup> <a name="VersionNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes"></a>

```csharp
public string[] VersionNamePrefixes { get; set; }
```

- *Type:* string[]

Match versions by version name prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#version_name_prefixes GoogleArtifactRegistryRepository#version_name_prefixes}

---

### GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions {
    double KeepCount = null,
    string[] PackageNamePrefixes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount">KeepCount</a></code> | <code>double</code> | Minimum number of versions to keep. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>string[]</code> | Match versions by package prefix. Applied on any prefix match. |

---

##### `KeepCount`<sup>Optional</sup> <a name="KeepCount" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount"></a>

```csharp
public double KeepCount { get; set; }
```

- *Type:* double

Minimum number of versions to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#keep_count GoogleArtifactRegistryRepository#keep_count}

---

##### `PackageNamePrefixes`<sup>Optional</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes"></a>

```csharp
public string[] PackageNamePrefixes { get; set; }
```

- *Type:* string[]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}

---

### GoogleArtifactRegistryRepositoryConfig <a name="GoogleArtifactRegistryRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Format,
    string RepositoryId,
    object CleanupPolicies = null,
    object CleanupPolicyDryRun = null,
    string Description = null,
    GoogleArtifactRegistryRepositoryDockerConfig DockerConfig = null,
    string Id = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    GoogleArtifactRegistryRepositoryMavenConfig MavenConfig = null,
    string Mode = null,
    string Project = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfig RemoteRepositoryConfig = null,
    GoogleArtifactRegistryRepositoryTimeouts Timeouts = null,
    GoogleArtifactRegistryRepositoryVirtualRepositoryConfig VirtualRepositoryConfig = null,
    GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig VulnerabilityScanningConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.format">Format</a></code> | <code>string</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicies">CleanupPolicies</a></code> | <code>object</code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun">CleanupPolicyDryRun</a></code> | <code>object</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.description">Description</a></code> | <code>string</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dockerConfig">DockerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.location">Location</a></code> | <code>string</code> | The name of the repository's location. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mavenConfig">MavenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mode">Mode</a></code> | <code>string</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig">RemoteRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig">VirtualRepositoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.vulnerabilityScanningConfig">VulnerabilityScanningConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | vulnerability_scanning_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#format GoogleArtifactRegistryRepository#format}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#repository_id GoogleArtifactRegistryRepository#repository_id}

---

##### `CleanupPolicies`<sup>Optional</sup> <a name="CleanupPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicies"></a>

```csharp
public object CleanupPolicies { get; set; }
```

- *Type:* object

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#cleanup_policies GoogleArtifactRegistryRepository#cleanup_policies}

---

##### `CleanupPolicyDryRun`<sup>Optional</sup> <a name="CleanupPolicyDryRun" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun"></a>

```csharp
public object CleanupPolicyDryRun { get; set; }
```

- *Type:* object

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#cleanup_policy_dry_run GoogleArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

##### `DockerConfig`<sup>Optional</sup> <a name="DockerConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dockerConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryDockerConfig DockerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#docker_config GoogleArtifactRegistryRepository#docker_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#kms_key_name GoogleArtifactRegistryRepository#kms_key_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#labels GoogleArtifactRegistryRepository#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#location GoogleArtifactRegistryRepository#location}

---

##### `MavenConfig`<sup>Optional</sup> <a name="MavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mavenConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryMavenConfig MavenConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#maven_config GoogleArtifactRegistryRepository#maven_config}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#mode GoogleArtifactRegistryRepository#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}.

---

##### `RemoteRepositoryConfig`<sup>Optional</sup> <a name="RemoteRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfig RemoteRepositoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#remote_repository_config GoogleArtifactRegistryRepository#remote_repository_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.timeouts"></a>

```csharp
public GoogleArtifactRegistryRepositoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#timeouts GoogleArtifactRegistryRepository#timeouts}

---

##### `VirtualRepositoryConfig`<sup>Optional</sup> <a name="VirtualRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryVirtualRepositoryConfig VirtualRepositoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#virtual_repository_config GoogleArtifactRegistryRepository#virtual_repository_config}

---

##### `VulnerabilityScanningConfig`<sup>Optional</sup> <a name="VulnerabilityScanningConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.vulnerabilityScanningConfig"></a>

```csharp
public GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig VulnerabilityScanningConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

vulnerability_scanning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#vulnerability_scanning_config GoogleArtifactRegistryRepository#vulnerability_scanning_config}

---

### GoogleArtifactRegistryRepositoryDockerConfig <a name="GoogleArtifactRegistryRepositoryDockerConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryDockerConfig {
    object ImmutableTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig.property.immutableTags">ImmutableTags</a></code> | <code>object</code> | The repository which enabled this flag prevents all tags from being modified, moved or deleted. |

---

##### `ImmutableTags`<sup>Optional</sup> <a name="ImmutableTags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig.property.immutableTags"></a>

```csharp
public object ImmutableTags { get; set; }
```

- *Type:* object

The repository which enabled this flag prevents all tags from being modified, moved or deleted.

This does not prevent tags from being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#immutable_tags GoogleArtifactRegistryRepository#immutable_tags}

---

### GoogleArtifactRegistryRepositoryMavenConfig <a name="GoogleArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryMavenConfig {
    object AllowSnapshotOverwrites = null,
    string VersionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites">AllowSnapshotOverwrites</a></code> | <code>object</code> | The repository with this flag will allow publishing the same snapshot versions. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.versionPolicy">VersionPolicy</a></code> | <code>string</code> | Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. |

---

##### `AllowSnapshotOverwrites`<sup>Optional</sup> <a name="AllowSnapshotOverwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites"></a>

```csharp
public object AllowSnapshotOverwrites { get; set; }
```

- *Type:* object

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#allow_snapshot_overwrites GoogleArtifactRegistryRepository#allow_snapshot_overwrites}

---

##### `VersionPolicy`<sup>Optional</sup> <a name="VersionPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.versionPolicy"></a>

```csharp
public string VersionPolicy { get; set; }
```

- *Type:* string

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#version_policy GoogleArtifactRegistryRepository#version_policy}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfig <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfig {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository AptRepository = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository CommonRepository = null,
    string Description = null,
    object DisableUpstreamValidation = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository DockerRepository = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository MavenRepository = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository NpmRepository = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository PythonRepository = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials UpstreamCredentials = null,
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository YumRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository">AptRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | apt_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.commonRepository">CommonRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | common_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.description">Description</a></code> | <code>string</code> | The description of the remote source. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation">DisableUpstreamValidation</a></code> | <code>object</code> | If true, the remote repository upstream and upstream credentials will not be validated. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository">DockerRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | docker_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository">MavenRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | maven_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository">NpmRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | npm_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository">PythonRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | python_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials">UpstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | upstream_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository">YumRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | yum_repository block. |

---

##### `AptRepository`<sup>Optional</sup> <a name="AptRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository AptRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

apt_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#apt_repository GoogleArtifactRegistryRepository#apt_repository}

---

##### `CommonRepository`<sup>Optional</sup> <a name="CommonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.commonRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository CommonRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

common_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#common_repository GoogleArtifactRegistryRepository#common_repository}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the remote source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

##### `DisableUpstreamValidation`<sup>Optional</sup> <a name="DisableUpstreamValidation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation"></a>

```csharp
public object DisableUpstreamValidation { get; set; }
```

- *Type:* object

If true, the remote repository upstream and upstream credentials will not be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#disable_upstream_validation GoogleArtifactRegistryRepository#disable_upstream_validation}

---

##### `DockerRepository`<sup>Optional</sup> <a name="DockerRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository DockerRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

docker_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#docker_repository GoogleArtifactRegistryRepository#docker_repository}

---

##### `MavenRepository`<sup>Optional</sup> <a name="MavenRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository MavenRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

maven_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#maven_repository GoogleArtifactRegistryRepository#maven_repository}

---

##### `NpmRepository`<sup>Optional</sup> <a name="NpmRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository NpmRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

npm_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#npm_repository GoogleArtifactRegistryRepository#npm_repository}

---

##### `PythonRepository`<sup>Optional</sup> <a name="PythonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository PythonRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

python_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#python_repository GoogleArtifactRegistryRepository#python_repository}

---

##### `UpstreamCredentials`<sup>Optional</sup> <a name="UpstreamCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials UpstreamCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

upstream_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#upstream_credentials GoogleArtifactRegistryRepository#upstream_credentials}

---

##### `YumRepository`<sup>Optional</sup> <a name="YumRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository YumRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

yum_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#yum_repository GoogleArtifactRegistryRepository#yum_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository PublicRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository PublicRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
    string RepositoryBase,
    string RepositoryPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase">RepositoryBase</a></code> | <code>string</code> | A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath">RepositoryPath</a></code> | <code>string</code> | Specific repository from the base. |

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase"></a>

```csharp
public string RepositoryBase { get; set; }
```

- *Type:* string

A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath"></a>

```csharp
public string RepositoryPath { get; set; }
```

- *Type:* string

Specific repository from the base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.property.uri">Uri</a></code> | <code>string</code> | One of: a. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

One of: a.

Artifact Registry Repository resource, e.g. 'projects/UPSTREAM_PROJECT_ID/locations/REGION/repositories/UPSTREAM_REPOSITORY'
b. URI to the registry, e.g. '"https://registry-1.docker.io"'
c. URI to Artifact Registry Repository, e.g. '"https://REGION-docker.pkg.dev/UPSTREAM_PROJECT_ID/UPSTREAM_REPOSITORY"'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository CustomRepository = null,
    string PublicRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository">PublicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository CustomRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository"></a>

```csharp
public string PublicRepository { get; set; }
```

- *Type:* string

Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri">Uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://registry-1.docker.io"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Specific uri to the registry, e.g. '"https://registry-1.docker.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository CustomRepository = null,
    string PublicRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository">PublicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository CustomRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository"></a>

```csharp
public string PublicRepository { get; set; }
```

- *Type:* string

Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri">Uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository CustomRepository = null,
    string PublicRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository">PublicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository CustomRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository"></a>

```csharp
public string PublicRepository { get; set; }
```

- *Type:* string

Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri">Uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://registry.npmjs.org"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Specific uri to the registry, e.g. '"https://registry.npmjs.org"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository CustomRepository = null,
    string PublicRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository">PublicRepository</a></code> | <code>string</code> | Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]. |

---

##### `CustomRepository`<sup>Optional</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository CustomRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository"></a>

```csharp
public string PublicRepository { get; set; }
```

- *Type:* string

Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri">Uri</a></code> | <code>string</code> | Specific uri to the registry, e.g. '"https://pypi.io"'. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Specific uri to the registry, e.g. '"https://pypi.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials UsernamePasswordCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials">UsernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | username_password_credentials block. |

---

##### `UsernamePasswordCredentials`<sup>Optional</sup> <a name="UsernamePasswordCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials UsernamePasswordCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

username_password_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#username_password_credentials GoogleArtifactRegistryRepository#username_password_credentials}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials {
    string PasswordSecretVersion = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>string</code> | The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username">Username</a></code> | <code>string</code> | The username to access the remote repository. |

---

##### `PasswordSecretVersion`<sup>Optional</sup> <a name="PasswordSecretVersion" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion"></a>

```csharp
public string PasswordSecretVersion { get; set; }
```

- *Type:* string

The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#password_secret_version GoogleArtifactRegistryRepository#password_secret_version}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to access the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#username GoogleArtifactRegistryRepository#username}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository {
    GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository PublicRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `PublicRepository`<sup>Optional</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository PublicRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
    string RepositoryBase,
    string RepositoryPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase">RepositoryBase</a></code> | <code>string</code> | A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath">RepositoryPath</a></code> | <code>string</code> | Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'. |

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase"></a>

```csharp
public string RepositoryBase { get; set; }
```

- *Type:* string

A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath"></a>

```csharp
public string RepositoryPath { get; set; }
```

- *Type:* string

Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}

---

### GoogleArtifactRegistryRepositoryTimeouts <a name="GoogleArtifactRegistryRepositoryTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}.

---

### GoogleArtifactRegistryRepositoryVirtualRepositoryConfig <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVirtualRepositoryConfig {
    object UpstreamPolicies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies">UpstreamPolicies</a></code> | <code>object</code> | upstream_policies block. |

---

##### `UpstreamPolicies`<sup>Optional</sup> <a name="UpstreamPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies"></a>

```csharp
public object UpstreamPolicies { get; set; }
```

- *Type:* object

upstream_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#upstream_policies GoogleArtifactRegistryRepository#upstream_policies}

---

### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies {
    string Id = null,
    double Priority = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id">Id</a></code> | <code>string</code> | The user-provided ID of the upstream policy. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority">Priority</a></code> | <code>double</code> | Entries with a greater priority value take precedence in the pull order. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository">Repository</a></code> | <code>string</code> | A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The user-provided ID of the upstream policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Entries with a greater priority value take precedence in the pull order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#priority GoogleArtifactRegistryRepository#priority}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#repository GoogleArtifactRegistryRepository#repository}

---

### GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig <a name="GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig {
    string EnablementConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig.property.enablementConfig">EnablementConfig</a></code> | <code>string</code> | This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"]. |

---

##### `EnablementConfig`<sup>Optional</sup> <a name="EnablementConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig.property.enablementConfig"></a>

```csharp
public string EnablementConfig { get; set; }
```

- *Type:* string

This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_artifact_registry_repository#enablement_config GoogleArtifactRegistryRepository#enablement_config}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan">ResetNewerThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan">ResetOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes">ResetPackageNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes">ResetTagPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState">ResetTagState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes">ResetVersionNamePrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewerThan` <a name="ResetNewerThan" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan"></a>

```csharp
private void ResetNewerThan()
```

##### `ResetOlderThan` <a name="ResetOlderThan" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan"></a>

```csharp
private void ResetOlderThan()
```

##### `ResetPackageNamePrefixes` <a name="ResetPackageNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes"></a>

```csharp
private void ResetPackageNamePrefixes()
```

##### `ResetTagPrefixes` <a name="ResetTagPrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes"></a>

```csharp
private void ResetTagPrefixes()
```

##### `ResetTagState` <a name="ResetTagState" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState"></a>

```csharp
private void ResetTagState()
```

##### `ResetVersionNamePrefixes` <a name="ResetVersionNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes"></a>

```csharp
private void ResetVersionNamePrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput">NewerThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput">OlderThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput">PackageNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput">TagPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput">TagStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput">VersionNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan">NewerThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan">OlderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes">TagPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState">TagState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes">VersionNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewerThanInput`<sup>Optional</sup> <a name="NewerThanInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput"></a>

```csharp
public string NewerThanInput { get; }
```

- *Type:* string

---

##### `OlderThanInput`<sup>Optional</sup> <a name="OlderThanInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput"></a>

```csharp
public string OlderThanInput { get; }
```

- *Type:* string

---

##### `PackageNamePrefixesInput`<sup>Optional</sup> <a name="PackageNamePrefixesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput"></a>

```csharp
public string[] PackageNamePrefixesInput { get; }
```

- *Type:* string[]

---

##### `TagPrefixesInput`<sup>Optional</sup> <a name="TagPrefixesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput"></a>

```csharp
public string[] TagPrefixesInput { get; }
```

- *Type:* string[]

---

##### `TagStateInput`<sup>Optional</sup> <a name="TagStateInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput"></a>

```csharp
public string TagStateInput { get; }
```

- *Type:* string

---

##### `VersionNamePrefixesInput`<sup>Optional</sup> <a name="VersionNamePrefixesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput"></a>

```csharp
public string[] VersionNamePrefixesInput { get; }
```

- *Type:* string[]

---

##### `NewerThan`<sup>Required</sup> <a name="NewerThan" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan"></a>

```csharp
public string NewerThan { get; }
```

- *Type:* string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan"></a>

```csharp
public string OlderThan { get; }
```

- *Type:* string

---

##### `PackageNamePrefixes`<sup>Required</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes"></a>

```csharp
public string[] PackageNamePrefixes { get; }
```

- *Type:* string[]

---

##### `TagPrefixes`<sup>Required</sup> <a name="TagPrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes"></a>

```csharp
public string[] TagPrefixes { get; }
```

- *Type:* string[]

---

##### `TagState`<sup>Required</sup> <a name="TagState" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState"></a>

```csharp
public string TagState { get; }
```

- *Type:* string

---

##### `VersionNamePrefixes`<sup>Required</sup> <a name="VersionNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes"></a>

```csharp
public string[] VersionNamePrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---


### GoogleArtifactRegistryRepositoryCleanupPoliciesList <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesList" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.get"></a>

```csharp
private GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount">ResetKeepCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes">ResetPackageNamePrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeepCount` <a name="ResetKeepCount" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount"></a>

```csharp
private void ResetKeepCount()
```

##### `ResetPackageNamePrefixes` <a name="ResetPackageNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes"></a>

```csharp
private void ResetPackageNamePrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput">KeepCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput">PackageNamePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount">KeepCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes">PackageNamePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeepCountInput`<sup>Optional</sup> <a name="KeepCountInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput"></a>

```csharp
public double KeepCountInput { get; }
```

- *Type:* double

---

##### `PackageNamePrefixesInput`<sup>Optional</sup> <a name="PackageNamePrefixesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput"></a>

```csharp
public string[] PackageNamePrefixesInput { get; }
```

- *Type:* string[]

---

##### `KeepCount`<sup>Required</sup> <a name="KeepCount" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount"></a>

```csharp
public double KeepCount { get; }
```

- *Type:* double

---

##### `PackageNamePrefixes`<sup>Required</sup> <a name="PackageNamePrefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes"></a>

```csharp
public string[] PackageNamePrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---


### GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions">PutMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions">ResetMostRecentVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition"></a>

```csharp
private void PutCondition(GoogleArtifactRegistryRepositoryCleanupPoliciesCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `PutMostRecentVersions` <a name="PutMostRecentVersions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions"></a>

```csharp
private void PutMostRecentVersions(GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetMostRecentVersions` <a name="ResetMostRecentVersions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions"></a>

```csharp
private void ResetMostRecentVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions">MostRecentVersions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput">MostRecentVersionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a>

---

##### `MostRecentVersions`<sup>Required</sup> <a name="MostRecentVersions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference MostRecentVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MostRecentVersionsInput`<sup>Optional</sup> <a name="MostRecentVersionsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions MostRecentVersionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleArtifactRegistryRepositoryDockerConfigOutputReference <a name="GoogleArtifactRegistryRepositoryDockerConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryDockerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags">ResetImmutableTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImmutableTags` <a name="ResetImmutableTags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags"></a>

```csharp
private void ResetImmutableTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput">ImmutableTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags">ImmutableTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImmutableTagsInput`<sup>Optional</sup> <a name="ImmutableTagsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput"></a>

```csharp
public object ImmutableTagsInput { get; }
```

- *Type:* object

---

##### `ImmutableTags`<sup>Required</sup> <a name="ImmutableTags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags"></a>

```csharp
public object ImmutableTags { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryDockerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

---


### GoogleArtifactRegistryRepositoryMavenConfigOutputReference <a name="GoogleArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryMavenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites">ResetAllowSnapshotOverwrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy">ResetVersionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSnapshotOverwrites` <a name="ResetAllowSnapshotOverwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites"></a>

```csharp
private void ResetAllowSnapshotOverwrites()
```

##### `ResetVersionPolicy` <a name="ResetVersionPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy"></a>

```csharp
private void ResetVersionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput">AllowSnapshotOverwritesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput">VersionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">AllowSnapshotOverwrites</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">VersionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowSnapshotOverwritesInput`<sup>Optional</sup> <a name="AllowSnapshotOverwritesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput"></a>

```csharp
public object AllowSnapshotOverwritesInput { get; }
```

- *Type:* object

---

##### `VersionPolicyInput`<sup>Optional</sup> <a name="VersionPolicyInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput"></a>

```csharp
public string VersionPolicyInput { get; }
```

- *Type:* string

---

##### `AllowSnapshotOverwrites`<sup>Required</sup> <a name="AllowSnapshotOverwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```csharp
public object AllowSnapshotOverwrites { get; }
```

- *Type:* object

---

##### `VersionPolicy`<sup>Required</sup> <a name="VersionPolicy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```csharp
public string VersionPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryMavenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository">PutPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicRepository` <a name="PutPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository"></a>

```csharp
private void PutPublicRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository"></a>

```csharp
private void ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference PublicRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository PublicRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">RepositoryBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">RepositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase">RepositoryBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath">RepositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryBaseInput`<sup>Optional</sup> <a name="RepositoryBaseInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```csharp
public string RepositoryBaseInput { get; }
```

- *Type:* string

---

##### `RepositoryPathInput`<sup>Optional</sup> <a name="RepositoryPathInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```csharp
public string RepositoryPathInput { get; }
```

- *Type:* string

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```csharp
public string RepositoryBase { get; }
```

- *Type:* string

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```csharp
public string RepositoryPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository"></a>

```csharp
private void PutCustomRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository"></a>

```csharp
private void ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository"></a>

```csharp
private void ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference CustomRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository CustomRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput"></a>

```csharp
public string PublicRepositoryInput { get; }
```

- *Type:* string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository"></a>

```csharp
public string PublicRepository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository"></a>

```csharp
private void PutCustomRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository"></a>

```csharp
private void ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository"></a>

```csharp
private void ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference CustomRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository CustomRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput"></a>

```csharp
public string PublicRepositoryInput { get; }
```

- *Type:* string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository"></a>

```csharp
public string PublicRepository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository"></a>

```csharp
private void PutCustomRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository"></a>

```csharp
private void ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository"></a>

```csharp
private void ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference CustomRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository CustomRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput"></a>

```csharp
public string PublicRepositoryInput { get; }
```

- *Type:* string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository"></a>

```csharp
public string PublicRepository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository">PutAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository">PutCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository">PutDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository">PutMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository">PutNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository">PutPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials">PutUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository">PutYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository">ResetAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetCommonRepository">ResetCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation">ResetDisableUpstreamValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository">ResetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository">ResetMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository">ResetNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository">ResetPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials">ResetUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository">ResetYumRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAptRepository` <a name="PutAptRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository"></a>

```csharp
private void PutAptRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `PutCommonRepository` <a name="PutCommonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository"></a>

```csharp
private void PutCommonRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---

##### `PutDockerRepository` <a name="PutDockerRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository"></a>

```csharp
private void PutDockerRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `PutMavenRepository` <a name="PutMavenRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository"></a>

```csharp
private void PutMavenRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `PutNpmRepository` <a name="PutNpmRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository"></a>

```csharp
private void PutNpmRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `PutPythonRepository` <a name="PutPythonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository"></a>

```csharp
private void PutPythonRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `PutUpstreamCredentials` <a name="PutUpstreamCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials"></a>

```csharp
private void PutUpstreamCredentials(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `PutYumRepository` <a name="PutYumRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository"></a>

```csharp
private void PutYumRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `ResetAptRepository` <a name="ResetAptRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository"></a>

```csharp
private void ResetAptRepository()
```

##### `ResetCommonRepository` <a name="ResetCommonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetCommonRepository"></a>

```csharp
private void ResetCommonRepository()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableUpstreamValidation` <a name="ResetDisableUpstreamValidation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation"></a>

```csharp
private void ResetDisableUpstreamValidation()
```

##### `ResetDockerRepository` <a name="ResetDockerRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository"></a>

```csharp
private void ResetDockerRepository()
```

##### `ResetMavenRepository` <a name="ResetMavenRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository"></a>

```csharp
private void ResetMavenRepository()
```

##### `ResetNpmRepository` <a name="ResetNpmRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository"></a>

```csharp
private void ResetNpmRepository()
```

##### `ResetPythonRepository` <a name="ResetPythonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository"></a>

```csharp
private void ResetPythonRepository()
```

##### `ResetUpstreamCredentials` <a name="ResetUpstreamCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials"></a>

```csharp
private void ResetUpstreamCredentials()
```

##### `ResetYumRepository` <a name="ResetYumRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository"></a>

```csharp
private void ResetYumRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository">AptRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepository">CommonRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository">DockerRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository">MavenRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository">NpmRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository">PythonRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials">UpstreamCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository">YumRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput">AptRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepositoryInput">CommonRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput">DisableUpstreamValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput">DockerRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput">MavenRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput">NpmRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput">PythonRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput">UpstreamCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput">YumRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation">DisableUpstreamValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AptRepository`<sup>Required</sup> <a name="AptRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference AptRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a>

---

##### `CommonRepository`<sup>Required</sup> <a name="CommonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference CommonRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference</a>

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference DockerRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a>

---

##### `MavenRepository`<sup>Required</sup> <a name="MavenRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference MavenRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a>

---

##### `NpmRepository`<sup>Required</sup> <a name="NpmRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference NpmRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a>

---

##### `PythonRepository`<sup>Required</sup> <a name="PythonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference PythonRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a>

---

##### `UpstreamCredentials`<sup>Required</sup> <a name="UpstreamCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference UpstreamCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a>

---

##### `YumRepository`<sup>Required</sup> <a name="YumRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference YumRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a>

---

##### `AptRepositoryInput`<sup>Optional</sup> <a name="AptRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository AptRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `CommonRepositoryInput`<sup>Optional</sup> <a name="CommonRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository CommonRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableUpstreamValidationInput`<sup>Optional</sup> <a name="DisableUpstreamValidationInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput"></a>

```csharp
public object DisableUpstreamValidationInput { get; }
```

- *Type:* object

---

##### `DockerRepositoryInput`<sup>Optional</sup> <a name="DockerRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository DockerRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `MavenRepositoryInput`<sup>Optional</sup> <a name="MavenRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository MavenRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `NpmRepositoryInput`<sup>Optional</sup> <a name="NpmRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository NpmRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `PythonRepositoryInput`<sup>Optional</sup> <a name="PythonRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository PythonRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `UpstreamCredentialsInput`<sup>Optional</sup> <a name="UpstreamCredentialsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials UpstreamCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `YumRepositoryInput`<sup>Optional</sup> <a name="YumRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository YumRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableUpstreamValidation`<sup>Required</sup> <a name="DisableUpstreamValidation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation"></a>

```csharp
public object DisableUpstreamValidation { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository">PutCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository">ResetCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomRepository` <a name="PutCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository"></a>

```csharp
private void PutCustomRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `ResetCustomRepository` <a name="ResetCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository"></a>

```csharp
private void ResetCustomRepository()
```

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository"></a>

```csharp
private void ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository">CustomRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput">CustomRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRepository`<sup>Required</sup> <a name="CustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference CustomRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a>

---

##### `CustomRepositoryInput`<sup>Optional</sup> <a name="CustomRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository CustomRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput"></a>

```csharp
public string PublicRepositoryInput { get; }
```

- *Type:* string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository"></a>

```csharp
public string PublicRepository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials">PutUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials">ResetUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsernamePasswordCredentials` <a name="PutUsernamePasswordCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials"></a>

```csharp
private void PutUsernamePasswordCredentials(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `ResetUsernamePasswordCredentials` <a name="ResetUsernamePasswordCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials"></a>

```csharp
private void ResetUsernamePasswordCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials">UsernamePasswordCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput">UsernamePasswordCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernamePasswordCredentials`<sup>Required</sup> <a name="UsernamePasswordCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference UsernamePasswordCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a>

---

##### `UsernamePasswordCredentialsInput`<sup>Optional</sup> <a name="UsernamePasswordCredentialsInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials UsernamePasswordCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion">ResetPasswordSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordSecretVersion` <a name="ResetPasswordSecretVersion" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion"></a>

```csharp
private void ResetPasswordSecretVersion()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput">PasswordSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion">PasswordSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordSecretVersionInput`<sup>Optional</sup> <a name="PasswordSecretVersionInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput"></a>

```csharp
public string PasswordSecretVersionInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `PasswordSecretVersion`<sup>Required</sup> <a name="PasswordSecretVersion" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion"></a>

```csharp
public string PasswordSecretVersion { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository">PutPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository">ResetPublicRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicRepository` <a name="PutPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository"></a>

```csharp
private void PutPublicRepository(GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `ResetPublicRepository` <a name="ResetPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository"></a>

```csharp
private void ResetPublicRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository">PublicRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput">PublicRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicRepository`<sup>Required</sup> <a name="PublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference PublicRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a>

---

##### `PublicRepositoryInput`<sup>Optional</sup> <a name="PublicRepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository PublicRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">RepositoryBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">RepositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase">RepositoryBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath">RepositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryBaseInput`<sup>Optional</sup> <a name="RepositoryBaseInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```csharp
public string RepositoryBaseInput { get; }
```

- *Type:* string

---

##### `RepositoryPathInput`<sup>Optional</sup> <a name="RepositoryPathInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```csharp
public string RepositoryPathInput { get; }
```

- *Type:* string

---

##### `RepositoryBase`<sup>Required</sup> <a name="RepositoryBase" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```csharp
public string RepositoryBase { get; }
```

- *Type:* string

---

##### `RepositoryPath`<sup>Required</sup> <a name="RepositoryPath" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```csharp
public string RepositoryPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---


### GoogleArtifactRegistryRepositoryTimeoutsOutputReference <a name="GoogleArtifactRegistryRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies">PutUpstreamPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies">ResetUpstreamPolicies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpstreamPolicies` <a name="PutUpstreamPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies"></a>

```csharp
private void PutUpstreamPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies.parameter.value"></a>

- *Type:* object

---

##### `ResetUpstreamPolicies` <a name="ResetUpstreamPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies"></a>

```csharp
private void ResetUpstreamPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies">UpstreamPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput">UpstreamPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpstreamPolicies`<sup>Required</sup> <a name="UpstreamPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies"></a>

```csharp
public GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList UpstreamPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a>

---

##### `UpstreamPoliciesInput`<sup>Optional</sup> <a name="UpstreamPoliciesInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput"></a>

```csharp
public object UpstreamPoliciesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryVirtualRepositoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---


### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get"></a>

```csharp
private GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference <a name="GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resetEnablementConfig">ResetEnablementConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnablementConfig` <a name="ResetEnablementConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resetEnablementConfig"></a>

```csharp
private void ResetEnablementConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementState">EnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementStateReason">EnablementStateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfigInput">EnablementConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfig">EnablementConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementState"></a>

```csharp
public string EnablementState { get; }
```

- *Type:* string

---

##### `EnablementStateReason`<sup>Required</sup> <a name="EnablementStateReason" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementStateReason"></a>

```csharp
public string EnablementStateReason { get; }
```

- *Type:* string

---

##### `EnablementConfigInput`<sup>Optional</sup> <a name="EnablementConfigInput" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfigInput"></a>

```csharp
public string EnablementConfigInput { get; }
```

- *Type:* string

---

##### `EnablementConfig`<sup>Required</sup> <a name="EnablementConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfig"></a>

```csharp
public string EnablementConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---



