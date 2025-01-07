# `googleAssuredWorkloadsWorkload` Submodule <a name="`googleAssuredWorkloadsWorkload` Submodule" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAssuredWorkloadsWorkload <a name="GoogleAssuredWorkloadsWorkload" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload google_assured_workloads_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkload(Construct Scope, string Id, GoogleAssuredWorkloadsWorkloadConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig">GoogleAssuredWorkloadsWorkloadConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig">GoogleAssuredWorkloadsWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings">PutKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putPartnerPermissions">PutPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings">PutResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putWorkloadOptions">PutWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetBillingAccount">ResetBillingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetEnableSovereignControls">ResetEnableSovereignControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetKmsSettings">ResetKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartner">ResetPartner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerPermissions">ResetPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerServicesBillingAccount">ResetPartnerServicesBillingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetProvisionedResourcesParent">ResetProvisionedResourcesParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetResourceSettings">ResetResourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetViolationNotificationsEnabled">ResetViolationNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetWorkloadOptions">ResetWorkloadOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsSettings` <a name="PutKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings"></a>

```csharp
private void PutKmsSettings(GoogleAssuredWorkloadsWorkloadKmsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putKmsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---

##### `PutPartnerPermissions` <a name="PutPartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putPartnerPermissions"></a>

```csharp
private void PutPartnerPermissions(GoogleAssuredWorkloadsWorkloadPartnerPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putPartnerPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `PutResourceSettings` <a name="PutResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings"></a>

```csharp
private void PutResourceSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putResourceSettings.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAssuredWorkloadsWorkloadTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

---

##### `PutWorkloadOptions` <a name="PutWorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putWorkloadOptions"></a>

```csharp
private void PutWorkloadOptions(GoogleAssuredWorkloadsWorkloadWorkloadOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.putWorkloadOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `ResetBillingAccount` <a name="ResetBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetBillingAccount"></a>

```csharp
private void ResetBillingAccount()
```

##### `ResetEnableSovereignControls` <a name="ResetEnableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetEnableSovereignControls"></a>

```csharp
private void ResetEnableSovereignControls()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsSettings` <a name="ResetKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetKmsSettings"></a>

```csharp
private void ResetKmsSettings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPartner` <a name="ResetPartner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartner"></a>

```csharp
private void ResetPartner()
```

##### `ResetPartnerPermissions` <a name="ResetPartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerPermissions"></a>

```csharp
private void ResetPartnerPermissions()
```

##### `ResetPartnerServicesBillingAccount` <a name="ResetPartnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetPartnerServicesBillingAccount"></a>

```csharp
private void ResetPartnerServicesBillingAccount()
```

##### `ResetProvisionedResourcesParent` <a name="ResetProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetProvisionedResourcesParent"></a>

```csharp
private void ResetProvisionedResourcesParent()
```

##### `ResetResourceSettings` <a name="ResetResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetResourceSettings"></a>

```csharp
private void ResetResourceSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetViolationNotificationsEnabled` <a name="ResetViolationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetViolationNotificationsEnabled"></a>

```csharp
private void ResetViolationNotificationsEnabled()
```

##### `ResetWorkloadOptions` <a name="ResetWorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.resetWorkloadOptions"></a>

```csharp
private void ResetWorkloadOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAssuredWorkloadsWorkload.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAssuredWorkloadsWorkload.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAssuredWorkloadsWorkload.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAssuredWorkloadsWorkload.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAssuredWorkloadsWorkload to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAssuredWorkloadsWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAssuredWorkloadsWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceStatus">ComplianceStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList">GoogleAssuredWorkloadsWorkloadComplianceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.compliantButDisallowedServices">CompliantButDisallowedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.ekmProvisioningResponse">EkmProvisioningResponse</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kajEnrollmentState">KajEnrollmentState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettings">KmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference">GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissions">PartnerPermissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference">GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList">GoogleAssuredWorkloadsWorkloadResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettings">ResourceSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList">GoogleAssuredWorkloadsWorkloadResourceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.saaEnrollmentResponse">SaaEnrollmentResponse</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference">GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptions">WorkloadOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference">GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccountInput">BillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegimeInput">ComplianceRegimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControlsInput">EnableSovereignControlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettingsInput">KmsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerInput">PartnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissionsInput">PartnerPermissionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput">PartnerServicesBillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParentInput">ProvisionedResourcesParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettingsInput">ResourceSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabledInput">ViolationNotificationsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptionsInput">WorkloadOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccount">BillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegime">ComplianceRegime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControls">EnableSovereignControls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partner">Partner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccount">PartnerServicesBillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParent">ProvisionedResourcesParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabled">ViolationNotificationsEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceStatus"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadComplianceStatusList ComplianceStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList">GoogleAssuredWorkloadsWorkloadComplianceStatusList</a>

---

##### `CompliantButDisallowedServices`<sup>Required</sup> <a name="CompliantButDisallowedServices" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.compliantButDisallowedServices"></a>

```csharp
public string[] CompliantButDisallowedServices { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EkmProvisioningResponse`<sup>Required</sup> <a name="EkmProvisioningResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.ekmProvisioningResponse"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList EkmProvisioningResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList</a>

---

##### `KajEnrollmentState`<sup>Required</sup> <a name="KajEnrollmentState" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kajEnrollmentState"></a>

```csharp
public string KajEnrollmentState { get; }
```

- *Type:* string

---

##### `KmsSettings`<sup>Required</sup> <a name="KmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettings"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference KmsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference">GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerPermissions`<sup>Required</sup> <a name="PartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissions"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference PartnerPermissions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference">GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resources"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList">GoogleAssuredWorkloadsWorkloadResourcesList</a>

---

##### `ResourceSettings`<sup>Required</sup> <a name="ResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettings"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadResourceSettingsList ResourceSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList">GoogleAssuredWorkloadsWorkloadResourceSettingsList</a>

---

##### `SaaEnrollmentResponse`<sup>Required</sup> <a name="SaaEnrollmentResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.saaEnrollmentResponse"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList SaaEnrollmentResponse { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeouts"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference">GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference</a>

---

##### `WorkloadOptions`<sup>Required</sup> <a name="WorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptions"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference WorkloadOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference">GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccountInput"></a>

```csharp
public string BillingAccountInput { get; }
```

- *Type:* string

---

##### `ComplianceRegimeInput`<sup>Optional</sup> <a name="ComplianceRegimeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegimeInput"></a>

```csharp
public string ComplianceRegimeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableSovereignControlsInput`<sup>Optional</sup> <a name="EnableSovereignControlsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControlsInput"></a>

```csharp
public object EnableSovereignControlsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsSettingsInput`<sup>Optional</sup> <a name="KmsSettingsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.kmsSettingsInput"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadKmsSettings KmsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PartnerInput`<sup>Optional</sup> <a name="PartnerInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerInput"></a>

```csharp
public string PartnerInput { get; }
```

- *Type:* string

---

##### `PartnerPermissionsInput`<sup>Optional</sup> <a name="PartnerPermissionsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerPermissionsInput"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadPartnerPermissions PartnerPermissionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

---

##### `PartnerServicesBillingAccountInput`<sup>Optional</sup> <a name="PartnerServicesBillingAccountInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccountInput"></a>

```csharp
public string PartnerServicesBillingAccountInput { get; }
```

- *Type:* string

---

##### `ProvisionedResourcesParentInput`<sup>Optional</sup> <a name="ProvisionedResourcesParentInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParentInput"></a>

```csharp
public string ProvisionedResourcesParentInput { get; }
```

- *Type:* string

---

##### `ResourceSettingsInput`<sup>Optional</sup> <a name="ResourceSettingsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.resourceSettingsInput"></a>

```csharp
public object ResourceSettingsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ViolationNotificationsEnabledInput`<sup>Optional</sup> <a name="ViolationNotificationsEnabledInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabledInput"></a>

```csharp
public object ViolationNotificationsEnabledInput { get; }
```

- *Type:* object

---

##### `WorkloadOptionsInput`<sup>Optional</sup> <a name="WorkloadOptionsInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.workloadOptionsInput"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadWorkloadOptions WorkloadOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.billingAccount"></a>

```csharp
public string BillingAccount { get; }
```

- *Type:* string

---

##### `ComplianceRegime`<sup>Required</sup> <a name="ComplianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.complianceRegime"></a>

```csharp
public string ComplianceRegime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableSovereignControls`<sup>Required</sup> <a name="EnableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.enableSovereignControls"></a>

```csharp
public object EnableSovereignControls { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Partner`<sup>Required</sup> <a name="Partner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partner"></a>

```csharp
public string Partner { get; }
```

- *Type:* string

---

##### `PartnerServicesBillingAccount`<sup>Required</sup> <a name="PartnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.partnerServicesBillingAccount"></a>

```csharp
public string PartnerServicesBillingAccount { get; }
```

- *Type:* string

---

##### `ProvisionedResourcesParent`<sup>Required</sup> <a name="ProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.provisionedResourcesParent"></a>

```csharp
public string ProvisionedResourcesParent { get; }
```

- *Type:* string

---

##### `ViolationNotificationsEnabled`<sup>Required</sup> <a name="ViolationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.violationNotificationsEnabled"></a>

```csharp
public object ViolationNotificationsEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkload.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAssuredWorkloadsWorkloadComplianceStatus <a name="GoogleAssuredWorkloadsWorkloadComplianceStatus" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadComplianceStatus {

};
```


### GoogleAssuredWorkloadsWorkloadConfig <a name="GoogleAssuredWorkloadsWorkloadConfig" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ComplianceRegime,
    string DisplayName,
    string Location,
    string Organization,
    string BillingAccount = null,
    object EnableSovereignControls = null,
    string Id = null,
    GoogleAssuredWorkloadsWorkloadKmsSettings KmsSettings = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Partner = null,
    GoogleAssuredWorkloadsWorkloadPartnerPermissions PartnerPermissions = null,
    string PartnerServicesBillingAccount = null,
    string ProvisionedResourcesParent = null,
    object ResourceSettings = null,
    GoogleAssuredWorkloadsWorkloadTimeouts Timeouts = null,
    object ViolationNotificationsEnabled = null,
    GoogleAssuredWorkloadsWorkloadWorkloadOptions WorkloadOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.complianceRegime">ComplianceRegime</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.organization">Organization</a></code> | <code>string</code> | The organization for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.billingAccount">BillingAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.enableSovereignControls">EnableSovereignControls</a></code> | <code>object</code> | Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.kmsSettings">KmsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | kms_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels applied to the workload. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partner">Partner</a></code> | <code>string</code> | Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerPermissions">PartnerPermissions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | partner_permissions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount">PartnerServicesBillingAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent">ProvisionedResourcesParent</a></code> | <code>string</code> | Input only. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.resourceSettings">ResourceSettings</a></code> | <code>object</code> | resource_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled">ViolationNotificationsEnabled</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.workloadOptions">WorkloadOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | workload_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ComplianceRegime`<sup>Required</sup> <a name="ComplianceRegime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.complianceRegime"></a>

```csharp
public string ComplianceRegime { get; set; }
```

- *Type:* string

Required.

Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT, KSA_REGIONS_AND_SUPPORT_WITH_SOVEREIGNTY_CONTROLS, REGIONAL_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS, HEALTHCARE_AND_LIFE_SCIENCES_CONTROLS_WITH_US_SUPPORT, IRS_1075

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#compliance_regime GoogleAssuredWorkloadsWorkload#compliance_regime}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required.

The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#display_name GoogleAssuredWorkloadsWorkload#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#location GoogleAssuredWorkloadsWorkload#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#organization GoogleAssuredWorkloadsWorkload#organization}

---

##### `BillingAccount`<sup>Optional</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.billingAccount"></a>

```csharp
public string BillingAccount { get; set; }
```

- *Type:* string

Optional.

Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#billing_account GoogleAssuredWorkloadsWorkload#billing_account}

---

##### `EnableSovereignControls`<sup>Optional</sup> <a name="EnableSovereignControls" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.enableSovereignControls"></a>

```csharp
public object EnableSovereignControls { get; set; }
```

- *Type:* object

Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#enable_sovereign_controls GoogleAssuredWorkloadsWorkload#enable_sovereign_controls}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#id GoogleAssuredWorkloadsWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsSettings`<sup>Optional</sup> <a name="KmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.kmsSettings"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadKmsSettings KmsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

kms_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#kms_settings GoogleAssuredWorkloadsWorkload#kms_settings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels applied to the workload.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#labels GoogleAssuredWorkloadsWorkload#labels}

---

##### `Partner`<sup>Optional</sup> <a name="Partner" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partner"></a>

```csharp
public string Partner { get; set; }
```

- *Type:* string

Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN, SOVEREIGN_CONTROLS_BY_CNTXT, SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner GoogleAssuredWorkloadsWorkload#partner}

---

##### `PartnerPermissions`<sup>Optional</sup> <a name="PartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerPermissions"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadPartnerPermissions PartnerPermissions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

partner_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner_permissions GoogleAssuredWorkloadsWorkload#partner_permissions}

---

##### `PartnerServicesBillingAccount`<sup>Optional</sup> <a name="PartnerServicesBillingAccount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.partnerServicesBillingAccount"></a>

```csharp
public string PartnerServicesBillingAccount { get; set; }
```

- *Type:* string

Optional.

Input only. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#partner_services_billing_account GoogleAssuredWorkloadsWorkload#partner_services_billing_account}

---

##### `ProvisionedResourcesParent`<sup>Optional</sup> <a name="ProvisionedResourcesParent" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.provisionedResourcesParent"></a>

```csharp
public string ProvisionedResourcesParent { get; set; }
```

- *Type:* string

Input only.

The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#provisioned_resources_parent GoogleAssuredWorkloadsWorkload#provisioned_resources_parent}

---

##### `ResourceSettings`<sup>Optional</sup> <a name="ResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.resourceSettings"></a>

```csharp
public object ResourceSettings { get; set; }
```

- *Type:* object

resource_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_settings GoogleAssuredWorkloadsWorkload#resource_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.timeouts"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts">GoogleAssuredWorkloadsWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#timeouts GoogleAssuredWorkloadsWorkload#timeouts}

---

##### `ViolationNotificationsEnabled`<sup>Optional</sup> <a name="ViolationNotificationsEnabled" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.violationNotificationsEnabled"></a>

```csharp
public object ViolationNotificationsEnabled { get; set; }
```

- *Type:* object

Optional.

Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#violation_notifications_enabled GoogleAssuredWorkloadsWorkload#violation_notifications_enabled}

---

##### `WorkloadOptions`<sup>Optional</sup> <a name="WorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadConfig.property.workloadOptions"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadWorkloadOptions WorkloadOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

workload_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#workload_options GoogleAssuredWorkloadsWorkload#workload_options}

---

### GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse <a name="GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse {

};
```


### GoogleAssuredWorkloadsWorkloadKmsSettings <a name="GoogleAssuredWorkloadsWorkloadKmsSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadKmsSettings {
    string NextRotationTime,
    string RotationPeriod
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | Required. |

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; set; }
```

- *Type:* string

Required.

Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#next_rotation_time GoogleAssuredWorkloadsWorkload#next_rotation_time}

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

Required.

Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#rotation_period GoogleAssuredWorkloadsWorkload#rotation_period}

---

### GoogleAssuredWorkloadsWorkloadPartnerPermissions <a name="GoogleAssuredWorkloadsWorkloadPartnerPermissions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadPartnerPermissions {
    object AssuredWorkloadsMonitoring = null,
    object DataLogsViewer = null,
    object ServiceAccessApprover = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring">AssuredWorkloadsMonitoring</a></code> | <code>object</code> | Optional. Allow partner to view violation alerts. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer">DataLogsViewer</a></code> | <code>object</code> | Allow the partner to view inspectability logs and monitoring violations. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover">ServiceAccessApprover</a></code> | <code>object</code> | Optional. Allow partner to view access approval logs. |

---

##### `AssuredWorkloadsMonitoring`<sup>Optional</sup> <a name="AssuredWorkloadsMonitoring" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.assuredWorkloadsMonitoring"></a>

```csharp
public object AssuredWorkloadsMonitoring { get; set; }
```

- *Type:* object

Optional. Allow partner to view violation alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#assured_workloads_monitoring GoogleAssuredWorkloadsWorkload#assured_workloads_monitoring}

---

##### `DataLogsViewer`<sup>Optional</sup> <a name="DataLogsViewer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.dataLogsViewer"></a>

```csharp
public object DataLogsViewer { get; set; }
```

- *Type:* object

Allow the partner to view inspectability logs and monitoring violations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#data_logs_viewer GoogleAssuredWorkloadsWorkload#data_logs_viewer}

---

##### `ServiceAccessApprover`<sup>Optional</sup> <a name="ServiceAccessApprover" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions.property.serviceAccessApprover"></a>

```csharp
public object ServiceAccessApprover { get; set; }
```

- *Type:* object

Optional. Allow partner to view access approval logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#service_access_approver GoogleAssuredWorkloadsWorkload#service_access_approver}

---

### GoogleAssuredWorkloadsWorkloadResources <a name="GoogleAssuredWorkloadsWorkloadResources" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadResources {

};
```


### GoogleAssuredWorkloadsWorkloadResourceSettings <a name="GoogleAssuredWorkloadsWorkloadResourceSettings" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadResourceSettings {
    string DisplayName = null,
    string ResourceId = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.displayName">DisplayName</a></code> | <code>string</code> | User-assigned resource display name. If not empty it will be used to create a resource with the specified name. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceId">ResourceId</a></code> | <code>string</code> | Resource identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceType">ResourceType</a></code> | <code>string</code> | Indicates the type of resource. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-assigned resource display name. If not empty it will be used to create a resource with the specified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#display_name GoogleAssuredWorkloadsWorkload#display_name}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Resource identifier.

For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_id GoogleAssuredWorkloadsWorkload#resource_id}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettings.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Indicates the type of resource.

This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#resource_type GoogleAssuredWorkloadsWorkload#resource_type}

---

### GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse <a name="GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse {

};
```


### GoogleAssuredWorkloadsWorkloadTimeouts <a name="GoogleAssuredWorkloadsWorkloadTimeouts" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#create GoogleAssuredWorkloadsWorkload#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#delete GoogleAssuredWorkloadsWorkload#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#update GoogleAssuredWorkloadsWorkload#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#create GoogleAssuredWorkloadsWorkload#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#delete GoogleAssuredWorkloadsWorkload#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#update GoogleAssuredWorkloadsWorkload#update}.

---

### GoogleAssuredWorkloadsWorkloadWorkloadOptions <a name="GoogleAssuredWorkloadsWorkloadWorkloadOptions" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadWorkloadOptions {
    string KajEnrollmentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType">KajEnrollmentType</a></code> | <code>string</code> | Indicates type of KAJ enrollment for the workload. |

---

##### `KajEnrollmentType`<sup>Optional</sup> <a name="KajEnrollmentType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions.property.kajEnrollmentType"></a>

```csharp
public string KajEnrollmentType { get; set; }
```

- *Type:* string

Indicates type of KAJ enrollment for the workload.

Currently, only specifiying KEY_ACCESS_TRANSPARENCY_OFF is implemented to not enroll in KAT-level KAJ enrollment for Regional Controls workloads. Possible values: KAJ_ENROLLMENT_TYPE_UNSPECIFIED, FULL_KAJ, EKM_ONLY, KEY_ACCESS_TRANSPARENCY_OFF

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_assured_workloads_workload#kaj_enrollment_type GoogleAssuredWorkloadsWorkload#kaj_enrollment_type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAssuredWorkloadsWorkloadComplianceStatusList <a name="GoogleAssuredWorkloadsWorkloadComplianceStatusList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadComplianceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.get"></a>

```csharp
private GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference <a name="GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount">AcknowledgedViolationCount</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount">ActiveViolationCount</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus">GoogleAssuredWorkloadsWorkloadComplianceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgedViolationCount`<sup>Required</sup> <a name="AcknowledgedViolationCount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.acknowledgedViolationCount"></a>

```csharp
public double[] AcknowledgedViolationCount { get; }
```

- *Type:* double[]

---

##### `ActiveViolationCount`<sup>Required</sup> <a name="ActiveViolationCount" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.activeViolationCount"></a>

```csharp
public double[] ActiveViolationCount { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadComplianceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadComplianceStatus">GoogleAssuredWorkloadsWorkloadComplianceStatus</a>

---


### GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList <a name="GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.get"></a>

```csharp
private GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference <a name="GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain">EkmProvisioningErrorDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping">EkmProvisioningErrorMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState">EkmProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EkmProvisioningErrorDomain`<sup>Required</sup> <a name="EkmProvisioningErrorDomain" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorDomain"></a>

```csharp
public string EkmProvisioningErrorDomain { get; }
```

- *Type:* string

---

##### `EkmProvisioningErrorMapping`<sup>Required</sup> <a name="EkmProvisioningErrorMapping" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningErrorMapping"></a>

```csharp
public string EkmProvisioningErrorMapping { get; }
```

- *Type:* string

---

##### `EkmProvisioningState`<sup>Required</sup> <a name="EkmProvisioningState" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.ekmProvisioningState"></a>

```csharp
public string EkmProvisioningState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse">GoogleAssuredWorkloadsWorkloadEkmProvisioningResponse</a>

---


### GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference <a name="GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTimeInput"></a>

```csharp
public string NextRotationTimeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadKmsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadKmsSettings">GoogleAssuredWorkloadsWorkloadKmsSettings</a>

---


### GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference <a name="GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring">ResetAssuredWorkloadsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer">ResetDataLogsViewer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover">ResetServiceAccessApprover</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssuredWorkloadsMonitoring` <a name="ResetAssuredWorkloadsMonitoring" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetAssuredWorkloadsMonitoring"></a>

```csharp
private void ResetAssuredWorkloadsMonitoring()
```

##### `ResetDataLogsViewer` <a name="ResetDataLogsViewer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetDataLogsViewer"></a>

```csharp
private void ResetDataLogsViewer()
```

##### `ResetServiceAccessApprover` <a name="ResetServiceAccessApprover" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.resetServiceAccessApprover"></a>

```csharp
private void ResetServiceAccessApprover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput">AssuredWorkloadsMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput">DataLogsViewerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput">ServiceAccessApproverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring">AssuredWorkloadsMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer">DataLogsViewer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover">ServiceAccessApprover</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssuredWorkloadsMonitoringInput`<sup>Optional</sup> <a name="AssuredWorkloadsMonitoringInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoringInput"></a>

```csharp
public object AssuredWorkloadsMonitoringInput { get; }
```

- *Type:* object

---

##### `DataLogsViewerInput`<sup>Optional</sup> <a name="DataLogsViewerInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewerInput"></a>

```csharp
public object DataLogsViewerInput { get; }
```

- *Type:* object

---

##### `ServiceAccessApproverInput`<sup>Optional</sup> <a name="ServiceAccessApproverInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApproverInput"></a>

```csharp
public object ServiceAccessApproverInput { get; }
```

- *Type:* object

---

##### `AssuredWorkloadsMonitoring`<sup>Required</sup> <a name="AssuredWorkloadsMonitoring" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.assuredWorkloadsMonitoring"></a>

```csharp
public object AssuredWorkloadsMonitoring { get; }
```

- *Type:* object

---

##### `DataLogsViewer`<sup>Required</sup> <a name="DataLogsViewer" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.dataLogsViewer"></a>

```csharp
public object DataLogsViewer { get; }
```

- *Type:* object

---

##### `ServiceAccessApprover`<sup>Required</sup> <a name="ServiceAccessApprover" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.serviceAccessApprover"></a>

```csharp
public object ServiceAccessApprover { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissionsOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadPartnerPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadPartnerPermissions">GoogleAssuredWorkloadsWorkloadPartnerPermissions</a>

---


### GoogleAssuredWorkloadsWorkloadResourceSettingsList <a name="GoogleAssuredWorkloadsWorkloadResourceSettingsList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadResourceSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get"></a>

```csharp
private GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference <a name="GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourceSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAssuredWorkloadsWorkloadResourcesList <a name="GoogleAssuredWorkloadsWorkloadResourcesList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get"></a>

```csharp
private GoogleAssuredWorkloadsWorkloadResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAssuredWorkloadsWorkloadResourcesOutputReference <a name="GoogleAssuredWorkloadsWorkloadResourcesOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources">GoogleAssuredWorkloadsWorkloadResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceId"></a>

```csharp
public double ResourceId { get; }
```

- *Type:* double

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResourcesOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadResources">GoogleAssuredWorkloadsWorkloadResources</a>

---


### GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList <a name="GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.get"></a>

```csharp
private GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference <a name="GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors">SetupErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus">SetupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SetupErrors`<sup>Required</sup> <a name="SetupErrors" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupErrors"></a>

```csharp
public string[] SetupErrors { get; }
```

- *Type:* string[]

---

##### `SetupStatus`<sup>Required</sup> <a name="SetupStatus" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.setupStatus"></a>

```csharp
public string SetupStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse">GoogleAssuredWorkloadsWorkloadSaaEnrollmentResponse</a>

---


### GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference <a name="GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference <a name="GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType">ResetKajEnrollmentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKajEnrollmentType` <a name="ResetKajEnrollmentType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.resetKajEnrollmentType"></a>

```csharp
private void ResetKajEnrollmentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput">KajEnrollmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType">KajEnrollmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KajEnrollmentTypeInput`<sup>Optional</sup> <a name="KajEnrollmentTypeInput" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentTypeInput"></a>

```csharp
public string KajEnrollmentTypeInput { get; }
```

- *Type:* string

---

##### `KajEnrollmentType`<sup>Required</sup> <a name="KajEnrollmentType" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.kajEnrollmentType"></a>

```csharp
public string KajEnrollmentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleAssuredWorkloadsWorkloadWorkloadOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAssuredWorkloadsWorkload.GoogleAssuredWorkloadsWorkloadWorkloadOptions">GoogleAssuredWorkloadsWorkloadWorkloadOptions</a>

---



