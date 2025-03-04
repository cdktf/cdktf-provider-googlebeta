# `googleApigeeOrganization` Submodule <a name="`googleApigeeOrganization` Submodule" id="@cdktf/provider-google-beta.googleApigeeOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeOrganization <a name="GoogleApigeeOrganization" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization google_apigee_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganization(Construct Scope, string Id, GoogleApigeeOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig">GoogleApigeeOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig">GoogleApigeeOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAnalyticsRegion">ResetAnalyticsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataEncryptionKeyName">ResetApiConsumerDataEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataLocation">ResetApiConsumerDataLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAuthorizedNetwork">ResetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetBillingType">ResetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetControlPlaneEncryptionKeyName">ResetControlPlaneEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisableVpcPeering">ResetDisableVpcPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRetention">ResetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName">ResetRuntimeDatabaseEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties"></a>

```csharp
private void PutProperties(GoogleApigeeOrganizationProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleApigeeOrganizationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

---

##### `ResetAnalyticsRegion` <a name="ResetAnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAnalyticsRegion"></a>

```csharp
private void ResetAnalyticsRegion()
```

##### `ResetApiConsumerDataEncryptionKeyName` <a name="ResetApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataEncryptionKeyName"></a>

```csharp
private void ResetApiConsumerDataEncryptionKeyName()
```

##### `ResetApiConsumerDataLocation` <a name="ResetApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetApiConsumerDataLocation"></a>

```csharp
private void ResetApiConsumerDataLocation()
```

##### `ResetAuthorizedNetwork` <a name="ResetAuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetAuthorizedNetwork"></a>

```csharp
private void ResetAuthorizedNetwork()
```

##### `ResetBillingType` <a name="ResetBillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetBillingType"></a>

```csharp
private void ResetBillingType()
```

##### `ResetControlPlaneEncryptionKeyName` <a name="ResetControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetControlPlaneEncryptionKeyName"></a>

```csharp
private void ResetControlPlaneEncryptionKeyName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableVpcPeering` <a name="ResetDisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisableVpcPeering"></a>

```csharp
private void ResetDisableVpcPeering()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetRetention` <a name="ResetRetention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRetention"></a>

```csharp
private void ResetRetention()
```

##### `ResetRuntimeDatabaseEncryptionKeyName` <a name="ResetRuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName"></a>

```csharp
private void ResetRuntimeDatabaseEncryptionKeyName()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetRuntimeType"></a>

```csharp
private void ResetRuntimeType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleApigeeOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleApigeeOrganization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apigeeProjectId">ApigeeProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference">GoogleApigeeOrganizationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.subscriptionType">SubscriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference">GoogleApigeeOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegionInput">AnalyticsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput">ApiConsumerDataEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocationInput">ApiConsumerDataLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingTypeInput">BillingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyNameInput">ControlPlaneEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeeringInput">DisableVpcPeeringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retentionInput">RetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput">RuntimeDatabaseEncryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegion">AnalyticsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyName">ApiConsumerDataEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocation">ApiConsumerDataLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingType">BillingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyName">ControlPlaneEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeering">DisableVpcPeering</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retention">Retention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyName">RuntimeDatabaseEncryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeType">RuntimeType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApigeeProjectId`<sup>Required</sup> <a name="ApigeeProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apigeeProjectId"></a>

```csharp
public string ApigeeProjectId { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.properties"></a>

```csharp
public GoogleApigeeOrganizationPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference">GoogleApigeeOrganizationPropertiesOutputReference</a>

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.subscriptionType"></a>

```csharp
public string SubscriptionType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeouts"></a>

```csharp
public GoogleApigeeOrganizationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference">GoogleApigeeOrganizationTimeoutsOutputReference</a>

---

##### `AnalyticsRegionInput`<sup>Optional</sup> <a name="AnalyticsRegionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegionInput"></a>

```csharp
public string AnalyticsRegionInput { get; }
```

- *Type:* string

---

##### `ApiConsumerDataEncryptionKeyNameInput`<sup>Optional</sup> <a name="ApiConsumerDataEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyNameInput"></a>

```csharp
public string ApiConsumerDataEncryptionKeyNameInput { get; }
```

- *Type:* string

---

##### `ApiConsumerDataLocationInput`<sup>Optional</sup> <a name="ApiConsumerDataLocationInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocationInput"></a>

```csharp
public string ApiConsumerDataLocationInput { get; }
```

- *Type:* string

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetworkInput"></a>

```csharp
public string AuthorizedNetworkInput { get; }
```

- *Type:* string

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingTypeInput"></a>

```csharp
public string BillingTypeInput { get; }
```

- *Type:* string

---

##### `ControlPlaneEncryptionKeyNameInput`<sup>Optional</sup> <a name="ControlPlaneEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyNameInput"></a>

```csharp
public string ControlPlaneEncryptionKeyNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableVpcPeeringInput`<sup>Optional</sup> <a name="DisableVpcPeeringInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeeringInput"></a>

```csharp
public object DisableVpcPeeringInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.propertiesInput"></a>

```csharp
public GoogleApigeeOrganizationProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retentionInput"></a>

```csharp
public string RetentionInput { get; }
```

- *Type:* string

---

##### `RuntimeDatabaseEncryptionKeyNameInput`<sup>Optional</sup> <a name="RuntimeDatabaseEncryptionKeyNameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput"></a>

```csharp
public string RuntimeDatabaseEncryptionKeyNameInput { get; }
```

- *Type:* string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeTypeInput"></a>

```csharp
public string RuntimeTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AnalyticsRegion`<sup>Required</sup> <a name="AnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.analyticsRegion"></a>

```csharp
public string AnalyticsRegion { get; }
```

- *Type:* string

---

##### `ApiConsumerDataEncryptionKeyName`<sup>Required</sup> <a name="ApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataEncryptionKeyName"></a>

```csharp
public string ApiConsumerDataEncryptionKeyName { get; }
```

- *Type:* string

---

##### `ApiConsumerDataLocation`<sup>Required</sup> <a name="ApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.apiConsumerDataLocation"></a>

```csharp
public string ApiConsumerDataLocation { get; }
```

- *Type:* string

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.authorizedNetwork"></a>

```csharp
public string AuthorizedNetwork { get; }
```

- *Type:* string

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.billingType"></a>

```csharp
public string BillingType { get; }
```

- *Type:* string

---

##### `ControlPlaneEncryptionKeyName`<sup>Required</sup> <a name="ControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.controlPlaneEncryptionKeyName"></a>

```csharp
public string ControlPlaneEncryptionKeyName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableVpcPeering`<sup>Required</sup> <a name="DisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.disableVpcPeering"></a>

```csharp
public object DisableVpcPeering { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.retention"></a>

```csharp
public string Retention { get; }
```

- *Type:* string

---

##### `RuntimeDatabaseEncryptionKeyName`<sup>Required</sup> <a name="RuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeDatabaseEncryptionKeyName"></a>

```csharp
public string RuntimeDatabaseEncryptionKeyName { get; }
```

- *Type:* string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.runtimeType"></a>

```csharp
public string RuntimeType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeOrganizationConfig <a name="GoogleApigeeOrganizationConfig" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string AnalyticsRegion = null,
    string ApiConsumerDataEncryptionKeyName = null,
    string ApiConsumerDataLocation = null,
    string AuthorizedNetwork = null,
    string BillingType = null,
    string ControlPlaneEncryptionKeyName = null,
    string Description = null,
    object DisableVpcPeering = null,
    string DisplayName = null,
    string Id = null,
    GoogleApigeeOrganizationProperties Properties = null,
    string Retention = null,
    string RuntimeDatabaseEncryptionKeyName = null,
    string RuntimeType = null,
    GoogleApigeeOrganizationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The project ID associated with the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.analyticsRegion">AnalyticsRegion</a></code> | <code>string</code> | Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName">ApiConsumerDataEncryptionKeyName</a></code> | <code>string</code> | Cloud KMS key name used for encrypting API consumer data. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataLocation">ApiConsumerDataLocation</a></code> | <code>string</code> | This field is needed only for customers using non-default data residency regions. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>string</code> | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.billingType">BillingType</a></code> | <code>string</code> | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName">ControlPlaneEncryptionKeyName</a></code> | <code>string</code> | Cloud KMS key name used for encrypting control plane data that is stored in a multi region. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.description">Description</a></code> | <code>string</code> | Description of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.disableVpcPeering">DisableVpcPeering</a></code> | <code>object</code> | Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#id GoogleApigeeOrganization#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.retention">Retention</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName">RuntimeDatabaseEncryptionKeyName</a></code> | <code>string</code> | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeType">RuntimeType</a></code> | <code>string</code> | Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project ID associated with the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#project_id GoogleApigeeOrganization#project_id}

---

##### `AnalyticsRegion`<sup>Optional</sup> <a name="AnalyticsRegion" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.analyticsRegion"></a>

```csharp
public string AnalyticsRegion { get; set; }
```

- *Type:* string

Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#analytics_region GoogleApigeeOrganization#analytics_region}

---

##### `ApiConsumerDataEncryptionKeyName`<sup>Optional</sup> <a name="ApiConsumerDataEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataEncryptionKeyName"></a>

```csharp
public string ApiConsumerDataEncryptionKeyName { get; set; }
```

- *Type:* string

Cloud KMS key name used for encrypting API consumer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#api_consumer_data_encryption_key_name GoogleApigeeOrganization#api_consumer_data_encryption_key_name}

---

##### `ApiConsumerDataLocation`<sup>Optional</sup> <a name="ApiConsumerDataLocation" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.apiConsumerDataLocation"></a>

```csharp
public string ApiConsumerDataLocation { get; set; }
```

- *Type:* string

This field is needed only for customers using non-default data residency regions.

Apigee stores some control plane data only in single region.
This field determines which single region Apigee should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#api_consumer_data_location GoogleApigeeOrganization#api_consumer_data_location}

---

##### `AuthorizedNetwork`<sup>Optional</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.authorizedNetwork"></a>

```csharp
public string AuthorizedNetwork { get; set; }
```

- *Type:* string

Compute Engine network used for Service Networking to be peered with Apigee runtime instances.

See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#authorized_network GoogleApigeeOrganization#authorized_network}

---

##### `BillingType`<sup>Optional</sup> <a name="BillingType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.billingType"></a>

```csharp
public string BillingType { get; set; }
```

- *Type:* string

Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#billing_type GoogleApigeeOrganization#billing_type}

---

##### `ControlPlaneEncryptionKeyName`<sup>Optional</sup> <a name="ControlPlaneEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.controlPlaneEncryptionKeyName"></a>

```csharp
public string ControlPlaneEncryptionKeyName { get; set; }
```

- *Type:* string

Cloud KMS key name used for encrypting control plane data that is stored in a multi region.

Only used for the data residency region "US" or "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#control_plane_encryption_key_name GoogleApigeeOrganization#control_plane_encryption_key_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#description GoogleApigeeOrganization#description}

---

##### `DisableVpcPeering`<sup>Optional</sup> <a name="DisableVpcPeering" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.disableVpcPeering"></a>

```csharp
public object DisableVpcPeering { get; set; }
```

- *Type:* object

Flag that specifies whether the VPC Peering through Private Google Access should be disabled between the consumer network and Apigee.

Required if an 'authorizedNetwork'
on the consumer project is not provided, in which case the flag should be set to 'true'.
Valid only when 'RuntimeType' is set to CLOUD. The value must be set before the creation
of any Apigee runtime instance and can be updated only when there are no runtime instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#disable_vpc_peering GoogleApigeeOrganization#disable_vpc_peering}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#display_name GoogleApigeeOrganization#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#id GoogleApigeeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.properties"></a>

```csharp
public GoogleApigeeOrganizationProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#properties GoogleApigeeOrganization#properties}

---

##### `Retention`<sup>Optional</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.retention"></a>

```csharp
public string Retention { get; set; }
```

- *Type:* string

Optional.

This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#retention GoogleApigeeOrganization#retention}

---

##### `RuntimeDatabaseEncryptionKeyName`<sup>Optional</sup> <a name="RuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName"></a>

```csharp
public string RuntimeDatabaseEncryptionKeyName { get; set; }
```

- *Type:* string

Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.

Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#runtime_database_encryption_key_name GoogleApigeeOrganization#runtime_database_encryption_key_name}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.runtimeType"></a>

```csharp
public string RuntimeType { get; set; }
```

- *Type:* string

Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#runtime_type GoogleApigeeOrganization#runtime_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationConfig.property.timeouts"></a>

```csharp
public GoogleApigeeOrganizationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts">GoogleApigeeOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#timeouts GoogleApigeeOrganization#timeouts}

---

### GoogleApigeeOrganizationProperties <a name="GoogleApigeeOrganizationProperties" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationProperties {
    object Property = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.property.property">Property</a></code> | <code>object</code> | property block. |

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties.property.property"></a>

```csharp
public object Property { get; set; }
```

- *Type:* object

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#property GoogleApigeeOrganization#property}

---

### GoogleApigeeOrganizationPropertiesProperty <a name="GoogleApigeeOrganizationPropertiesProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationPropertiesProperty {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.name">Name</a></code> | <code>string</code> | Name of the property. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.value">Value</a></code> | <code>string</code> | Value of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#name GoogleApigeeOrganization#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesProperty.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#value GoogleApigeeOrganization#value}

---

### GoogleApigeeOrganizationTimeouts <a name="GoogleApigeeOrganizationTimeouts" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#create GoogleApigeeOrganization#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#delete GoogleApigeeOrganization#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#update GoogleApigeeOrganization#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#create GoogleApigeeOrganization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#delete GoogleApigeeOrganization#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_apigee_organization#update GoogleApigeeOrganization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeOrganizationPropertiesOutputReference <a name="GoogleApigeeOrganizationPropertiesOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty"></a>

```csharp
private void PutProperty(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* object

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.resetProperty"></a>

```csharp
private void ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.property">Property</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList">GoogleApigeeOrganizationPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.property"></a>

```csharp
public GoogleApigeeOrganizationPropertiesPropertyList Property { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList">GoogleApigeeOrganizationPropertiesPropertyList</a>

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.propertyInput"></a>

```csharp
public object PropertyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleApigeeOrganizationProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationProperties">GoogleApigeeOrganizationProperties</a>

---


### GoogleApigeeOrganizationPropertiesPropertyList <a name="GoogleApigeeOrganizationPropertiesPropertyList" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationPropertiesPropertyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get"></a>

```csharp
private GoogleApigeeOrganizationPropertiesPropertyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeOrganizationPropertiesPropertyOutputReference <a name="GoogleApigeeOrganizationPropertiesPropertyOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationPropertiesPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleApigeeOrganizationTimeoutsOutputReference <a name="GoogleApigeeOrganizationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleApigeeOrganizationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeOrganization.GoogleApigeeOrganizationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



