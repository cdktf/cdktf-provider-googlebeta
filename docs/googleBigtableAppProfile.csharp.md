# `googleBigtableAppProfile` Submodule <a name="`googleBigtableAppProfile` Submodule" id="@cdktf/provider-google-beta.googleBigtableAppProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableAppProfile <a name="GoogleBigtableAppProfile" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile google_bigtable_app_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfile(Construct Scope, string Id, GoogleBigtableAppProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig">GoogleBigtableAppProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig">GoogleBigtableAppProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putDataBoostIsolationReadOnly">PutDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting">PutSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putStandardIsolation">PutStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDataBoostIsolationReadOnly">ResetDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingClusterIds">ResetMultiClusterRoutingClusterIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingUseAny">ResetMultiClusterRoutingUseAny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetRowAffinity">ResetRowAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetSingleClusterRouting">ResetSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetStandardIsolation">ResetStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataBoostIsolationReadOnly` <a name="PutDataBoostIsolationReadOnly" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putDataBoostIsolationReadOnly"></a>

```csharp
private void PutDataBoostIsolationReadOnly(GoogleBigtableAppProfileDataBoostIsolationReadOnly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putDataBoostIsolationReadOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `PutSingleClusterRouting` <a name="PutSingleClusterRouting" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting"></a>

```csharp
private void PutSingleClusterRouting(GoogleBigtableAppProfileSingleClusterRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

---

##### `PutStandardIsolation` <a name="PutStandardIsolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putStandardIsolation"></a>

```csharp
private void PutStandardIsolation(GoogleBigtableAppProfileStandardIsolation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putStandardIsolation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigtableAppProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>

---

##### `ResetDataBoostIsolationReadOnly` <a name="ResetDataBoostIsolationReadOnly" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDataBoostIsolationReadOnly"></a>

```csharp
private void ResetDataBoostIsolationReadOnly()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetIgnoreWarnings"></a>

```csharp
private void ResetIgnoreWarnings()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetMultiClusterRoutingClusterIds` <a name="ResetMultiClusterRoutingClusterIds" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingClusterIds"></a>

```csharp
private void ResetMultiClusterRoutingClusterIds()
```

##### `ResetMultiClusterRoutingUseAny` <a name="ResetMultiClusterRoutingUseAny" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingUseAny"></a>

```csharp
private void ResetMultiClusterRoutingUseAny()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRowAffinity` <a name="ResetRowAffinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetRowAffinity"></a>

```csharp
private void ResetRowAffinity()
```

##### `ResetSingleClusterRouting` <a name="ResetSingleClusterRouting" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetSingleClusterRouting"></a>

```csharp
private void ResetSingleClusterRouting()
```

##### `ResetStandardIsolation` <a name="ResetStandardIsolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetStandardIsolation"></a>

```csharp
private void ResetStandardIsolation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableAppProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAppProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAppProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAppProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigtableAppProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigtableAppProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigtableAppProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigtableAppProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableAppProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnly">DataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference">GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRouting">SingleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference">GoogleBigtableAppProfileSingleClusterRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolation">StandardIsolation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference">GoogleBigtableAppProfileStandardIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference">GoogleBigtableAppProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileIdInput">AppProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnlyInput">DataBoostIsolationReadOnlyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIdsInput">MultiClusterRoutingClusterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAnyInput">MultiClusterRoutingUseAnyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinityInput">RowAffinityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRoutingInput">SingleClusterRoutingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolationInput">StandardIsolationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileId">AppProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIds">MultiClusterRoutingClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAny">MultiClusterRoutingUseAny</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinity">RowAffinity</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataBoostIsolationReadOnly`<sup>Required</sup> <a name="DataBoostIsolationReadOnly" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnly"></a>

```csharp
public GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference DataBoostIsolationReadOnly { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference">GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SingleClusterRouting`<sup>Required</sup> <a name="SingleClusterRouting" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRouting"></a>

```csharp
public GoogleBigtableAppProfileSingleClusterRoutingOutputReference SingleClusterRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference">GoogleBigtableAppProfileSingleClusterRoutingOutputReference</a>

---

##### `StandardIsolation`<sup>Required</sup> <a name="StandardIsolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolation"></a>

```csharp
public GoogleBigtableAppProfileStandardIsolationOutputReference StandardIsolation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference">GoogleBigtableAppProfileStandardIsolationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeouts"></a>

```csharp
public GoogleBigtableAppProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference">GoogleBigtableAppProfileTimeoutsOutputReference</a>

---

##### `AppProfileIdInput`<sup>Optional</sup> <a name="AppProfileIdInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileIdInput"></a>

```csharp
public string AppProfileIdInput { get; }
```

- *Type:* string

---

##### `DataBoostIsolationReadOnlyInput`<sup>Optional</sup> <a name="DataBoostIsolationReadOnlyInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnlyInput"></a>

```csharp
public GoogleBigtableAppProfileDataBoostIsolationReadOnly DataBoostIsolationReadOnlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarningsInput"></a>

```csharp
public object IgnoreWarningsInput { get; }
```

- *Type:* object

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `MultiClusterRoutingClusterIdsInput`<sup>Optional</sup> <a name="MultiClusterRoutingClusterIdsInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIdsInput"></a>

```csharp
public string[] MultiClusterRoutingClusterIdsInput { get; }
```

- *Type:* string[]

---

##### `MultiClusterRoutingUseAnyInput`<sup>Optional</sup> <a name="MultiClusterRoutingUseAnyInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAnyInput"></a>

```csharp
public object MultiClusterRoutingUseAnyInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RowAffinityInput`<sup>Optional</sup> <a name="RowAffinityInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinityInput"></a>

```csharp
public object RowAffinityInput { get; }
```

- *Type:* object

---

##### `SingleClusterRoutingInput`<sup>Optional</sup> <a name="SingleClusterRoutingInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRoutingInput"></a>

```csharp
public GoogleBigtableAppProfileSingleClusterRouting SingleClusterRoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

---

##### `StandardIsolationInput`<sup>Optional</sup> <a name="StandardIsolationInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolationInput"></a>

```csharp
public GoogleBigtableAppProfileStandardIsolation StandardIsolationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AppProfileId`<sup>Required</sup> <a name="AppProfileId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileId"></a>

```csharp
public string AppProfileId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarnings"></a>

```csharp
public object IgnoreWarnings { get; }
```

- *Type:* object

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `MultiClusterRoutingClusterIds`<sup>Required</sup> <a name="MultiClusterRoutingClusterIds" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIds"></a>

```csharp
public string[] MultiClusterRoutingClusterIds { get; }
```

- *Type:* string[]

---

##### `MultiClusterRoutingUseAny`<sup>Required</sup> <a name="MultiClusterRoutingUseAny" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAny"></a>

```csharp
public object MultiClusterRoutingUseAny { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RowAffinity`<sup>Required</sup> <a name="RowAffinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinity"></a>

```csharp
public object RowAffinity { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableAppProfileConfig <a name="GoogleBigtableAppProfileConfig" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppProfileId,
    GoogleBigtableAppProfileDataBoostIsolationReadOnly DataBoostIsolationReadOnly = null,
    string Description = null,
    string Id = null,
    object IgnoreWarnings = null,
    string Instance = null,
    string[] MultiClusterRoutingClusterIds = null,
    object MultiClusterRoutingUseAny = null,
    string Project = null,
    object RowAffinity = null,
    GoogleBigtableAppProfileSingleClusterRouting SingleClusterRouting = null,
    GoogleBigtableAppProfileStandardIsolation StandardIsolation = null,
    GoogleBigtableAppProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.appProfileId">AppProfileId</a></code> | <code>string</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dataBoostIsolationReadOnly">DataBoostIsolationReadOnly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.description">Description</a></code> | <code>string</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>object</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.instance">Instance</a></code> | <code>string</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingClusterIds">MultiClusterRoutingClusterIds</a></code> | <code>string[]</code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingUseAny">MultiClusterRoutingUseAny</a></code> | <code>object</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.rowAffinity">RowAffinity</a></code> | <code>object</code> | Must be used with multi-cluster routing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.singleClusterRouting">SingleClusterRouting</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.standardIsolation">StandardIsolation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppProfileId`<sup>Required</sup> <a name="AppProfileId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.appProfileId"></a>

```csharp
public string AppProfileId { get; set; }
```

- *Type:* string

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#app_profile_id GoogleBigtableAppProfile#app_profile_id}

---

##### `DataBoostIsolationReadOnly`<sup>Optional</sup> <a name="DataBoostIsolationReadOnly" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dataBoostIsolationReadOnly"></a>

```csharp
public GoogleBigtableAppProfileDataBoostIsolationReadOnly DataBoostIsolationReadOnly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#data_boost_isolation_read_only GoogleBigtableAppProfile#data_boost_isolation_read_only}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#description GoogleBigtableAppProfile#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.ignoreWarnings"></a>

```csharp
public object IgnoreWarnings { get; set; }
```

- *Type:* object

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#ignore_warnings GoogleBigtableAppProfile#ignore_warnings}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#instance GoogleBigtableAppProfile#instance}

---

##### `MultiClusterRoutingClusterIds`<sup>Optional</sup> <a name="MultiClusterRoutingClusterIds" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingClusterIds"></a>

```csharp
public string[] MultiClusterRoutingClusterIds { get; set; }
```

- *Type:* string[]

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_cluster_ids GoogleBigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `MultiClusterRoutingUseAny`<sup>Optional</sup> <a name="MultiClusterRoutingUseAny" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingUseAny"></a>

```csharp
public object MultiClusterRoutingUseAny { get; set; }
```

- *Type:* object

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_use_any GoogleBigtableAppProfile#multi_cluster_routing_use_any}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}.

---

##### `RowAffinity`<sup>Optional</sup> <a name="RowAffinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.rowAffinity"></a>

```csharp
public object RowAffinity { get; set; }
```

- *Type:* object

Must be used with multi-cluster routing.

If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#row_affinity GoogleBigtableAppProfile#row_affinity}

---

##### `SingleClusterRouting`<sup>Optional</sup> <a name="SingleClusterRouting" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.singleClusterRouting"></a>

```csharp
public GoogleBigtableAppProfileSingleClusterRouting SingleClusterRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#single_cluster_routing GoogleBigtableAppProfile#single_cluster_routing}

---

##### `StandardIsolation`<sup>Optional</sup> <a name="StandardIsolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.standardIsolation"></a>

```csharp
public GoogleBigtableAppProfileStandardIsolation StandardIsolation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#standard_isolation GoogleBigtableAppProfile#standard_isolation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.timeouts"></a>

```csharp
public GoogleBigtableAppProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#timeouts GoogleBigtableAppProfile#timeouts}

---

### GoogleBigtableAppProfileDataBoostIsolationReadOnly <a name="GoogleBigtableAppProfileDataBoostIsolationReadOnly" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileDataBoostIsolationReadOnly {
    string ComputeBillingOwner
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner">ComputeBillingOwner</a></code> | <code>string</code> | The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]. |

---

##### `ComputeBillingOwner`<sup>Required</sup> <a name="ComputeBillingOwner" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner"></a>

```csharp
public string ComputeBillingOwner { get; set; }
```

- *Type:* string

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#compute_billing_owner GoogleBigtableAppProfile#compute_billing_owner}

---

### GoogleBigtableAppProfileSingleClusterRouting <a name="GoogleBigtableAppProfileSingleClusterRouting" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileSingleClusterRouting {
    string ClusterId,
    object AllowTransactionalWrites = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.clusterId">ClusterId</a></code> | <code>string</code> | The cluster to which read/write requests should be routed. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites">AllowTransactionalWrites</a></code> | <code>object</code> | If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#cluster_id GoogleBigtableAppProfile#cluster_id}

---

##### `AllowTransactionalWrites`<sup>Optional</sup> <a name="AllowTransactionalWrites" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites"></a>

```csharp
public object AllowTransactionalWrites { get; set; }
```

- *Type:* object

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#allow_transactional_writes GoogleBigtableAppProfile#allow_transactional_writes}

---

### GoogleBigtableAppProfileStandardIsolation <a name="GoogleBigtableAppProfileStandardIsolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileStandardIsolation {
    string Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation.property.priority">Priority</a></code> | <code>string</code> | The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. |

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#priority GoogleBigtableAppProfile#priority}

---

### GoogleBigtableAppProfileTimeouts <a name="GoogleBigtableAppProfileTimeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#create GoogleBigtableAppProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#delete GoogleBigtableAppProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#update GoogleBigtableAppProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#create GoogleBigtableAppProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#delete GoogleBigtableAppProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_app_profile#update GoogleBigtableAppProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference <a name="GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput">ComputeBillingOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner">ComputeBillingOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeBillingOwnerInput`<sup>Optional</sup> <a name="ComputeBillingOwnerInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput"></a>

```csharp
public string ComputeBillingOwnerInput { get; }
```

- *Type:* string

---

##### `ComputeBillingOwner`<sup>Required</sup> <a name="ComputeBillingOwner" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner"></a>

```csharp
public string ComputeBillingOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue"></a>

```csharp
public GoogleBigtableAppProfileDataBoostIsolationReadOnly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

---


### GoogleBigtableAppProfileSingleClusterRoutingOutputReference <a name="GoogleBigtableAppProfileSingleClusterRoutingOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileSingleClusterRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites">ResetAllowTransactionalWrites</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowTransactionalWrites` <a name="ResetAllowTransactionalWrites" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites"></a>

```csharp
private void ResetAllowTransactionalWrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput">AllowTransactionalWritesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites">AllowTransactionalWrites</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowTransactionalWritesInput`<sup>Optional</sup> <a name="AllowTransactionalWritesInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput"></a>

```csharp
public object AllowTransactionalWritesInput { get; }
```

- *Type:* object

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `AllowTransactionalWrites`<sup>Required</sup> <a name="AllowTransactionalWrites" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites"></a>

```csharp
public object AllowTransactionalWrites { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue"></a>

```csharp
public GoogleBigtableAppProfileSingleClusterRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

---


### GoogleBigtableAppProfileStandardIsolationOutputReference <a name="GoogleBigtableAppProfileStandardIsolationOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileStandardIsolationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.internalValue"></a>

```csharp
public GoogleBigtableAppProfileStandardIsolation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

---


### GoogleBigtableAppProfileTimeoutsOutputReference <a name="GoogleBigtableAppProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigtableAppProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



