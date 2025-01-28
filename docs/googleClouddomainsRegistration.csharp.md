# `googleClouddomainsRegistration` Submodule <a name="`googleClouddomainsRegistration` Submodule" id="@cdktf/provider-google-beta.googleClouddomainsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddomainsRegistration <a name="GoogleClouddomainsRegistration" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration google_clouddomains_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistration(Construct Scope, string Id, GoogleClouddomainsRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig">GoogleClouddomainsRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig">GoogleClouddomainsRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings">PutContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings">PutDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings">PutManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice">PutYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetContactNotices">ResetContactNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDnsSettings">ResetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDomainNotices">ResetDomainNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetManagementSettings">ResetManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContactSettings` <a name="PutContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings"></a>

```csharp
private void PutContactSettings(GoogleClouddomainsRegistrationContactSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putContactSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---

##### `PutDnsSettings` <a name="PutDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings"></a>

```csharp
private void PutDnsSettings(GoogleClouddomainsRegistrationDnsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---

##### `PutManagementSettings` <a name="PutManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings"></a>

```csharp
private void PutManagementSettings(GoogleClouddomainsRegistrationManagementSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putManagementSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleClouddomainsRegistrationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

---

##### `PutYearlyPrice` <a name="PutYearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice"></a>

```csharp
private void PutYearlyPrice(GoogleClouddomainsRegistrationYearlyPrice Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.putYearlyPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---

##### `ResetContactNotices` <a name="ResetContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetContactNotices"></a>

```csharp
private void ResetContactNotices()
```

##### `ResetDnsSettings` <a name="ResetDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDnsSettings"></a>

```csharp
private void ResetDnsSettings()
```

##### `ResetDomainNotices` <a name="ResetDomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetDomainNotices"></a>

```csharp
private void ResetDomainNotices()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetManagementSettings` <a name="ResetManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetManagementSettings"></a>

```csharp
private void ResetManagementSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddomainsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddomainsRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddomainsRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddomainsRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddomainsRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleClouddomainsRegistration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddomainsRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddomainsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddomainsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettings">ContactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference">GoogleClouddomainsRegistrationContactSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference">GoogleClouddomainsRegistrationDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.issues">Issues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettings">ManagementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference">GoogleClouddomainsRegistrationManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.registerFailureReason">RegisterFailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.supportedPrivacy">SupportedPrivacy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference">GoogleClouddomainsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPrice">YearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference">GoogleClouddomainsRegistrationYearlyPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNoticesInput">ContactNoticesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettingsInput">ContactSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettingsInput">DnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNoticesInput">DomainNoticesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettingsInput">ManagementSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPriceInput">YearlyPriceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNotices">ContactNotices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNotices">DomainNotices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContactSettings`<sup>Required</sup> <a name="ContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettings"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsOutputReference ContactSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference">GoogleClouddomainsRegistrationContactSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DnsSettings`<sup>Required</sup> <a name="DnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettings"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsOutputReference DnsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference">GoogleClouddomainsRegistrationDnsSettingsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.issues"></a>

```csharp
public string[] Issues { get; }
```

- *Type:* string[]

---

##### `ManagementSettings`<sup>Required</sup> <a name="ManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettings"></a>

```csharp
public GoogleClouddomainsRegistrationManagementSettingsOutputReference ManagementSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference">GoogleClouddomainsRegistrationManagementSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegisterFailureReason`<sup>Required</sup> <a name="RegisterFailureReason" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.registerFailureReason"></a>

```csharp
public string RegisterFailureReason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedPrivacy`<sup>Required</sup> <a name="SupportedPrivacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.supportedPrivacy"></a>

```csharp
public string[] SupportedPrivacy { get; }
```

- *Type:* string[]

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeouts"></a>

```csharp
public GoogleClouddomainsRegistrationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference">GoogleClouddomainsRegistrationTimeoutsOutputReference</a>

---

##### `YearlyPrice`<sup>Required</sup> <a name="YearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPrice"></a>

```csharp
public GoogleClouddomainsRegistrationYearlyPriceOutputReference YearlyPrice { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference">GoogleClouddomainsRegistrationYearlyPriceOutputReference</a>

---

##### `ContactNoticesInput`<sup>Optional</sup> <a name="ContactNoticesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNoticesInput"></a>

```csharp
public string[] ContactNoticesInput { get; }
```

- *Type:* string[]

---

##### `ContactSettingsInput`<sup>Optional</sup> <a name="ContactSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactSettingsInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettings ContactSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---

##### `DnsSettingsInput`<sup>Optional</sup> <a name="DnsSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.dnsSettingsInput"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettings DnsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `DomainNoticesInput`<sup>Optional</sup> <a name="DomainNoticesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNoticesInput"></a>

```csharp
public string[] DomainNoticesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementSettingsInput`<sup>Optional</sup> <a name="ManagementSettingsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.managementSettingsInput"></a>

```csharp
public GoogleClouddomainsRegistrationManagementSettings ManagementSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `YearlyPriceInput`<sup>Optional</sup> <a name="YearlyPriceInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.yearlyPriceInput"></a>

```csharp
public GoogleClouddomainsRegistrationYearlyPrice YearlyPriceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---

##### `ContactNotices`<sup>Required</sup> <a name="ContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.contactNotices"></a>

```csharp
public string[] ContactNotices { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainNotices`<sup>Required</sup> <a name="DomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.domainNotices"></a>

```csharp
public string[] DomainNotices { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddomainsRegistrationConfig <a name="GoogleClouddomainsRegistrationConfig" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleClouddomainsRegistrationContactSettings ContactSettings,
    string DomainName,
    string Location,
    GoogleClouddomainsRegistrationYearlyPrice YearlyPrice,
    string[] ContactNotices = null,
    GoogleClouddomainsRegistrationDnsSettings DnsSettings = null,
    string[] DomainNotices = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleClouddomainsRegistrationManagementSettings ManagementSettings = null,
    string Project = null,
    GoogleClouddomainsRegistrationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactSettings">ContactSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainName">DomainName</a></code> | <code>string</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.yearlyPrice">YearlyPrice</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactNotices">ContactNotices</a></code> | <code>string[]</code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainNotices">DomainNotices</a></code> | <code>string[]</code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.managementSettings">ManagementSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactSettings`<sup>Required</sup> <a name="ContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactSettings"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettings ContactSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#contact_settings GoogleClouddomainsRegistration#contact_settings}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#domain_name GoogleClouddomainsRegistration#domain_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#location GoogleClouddomainsRegistration#location}

---

##### `YearlyPrice`<sup>Required</sup> <a name="YearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.yearlyPrice"></a>

```csharp
public GoogleClouddomainsRegistrationYearlyPrice YearlyPrice { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#yearly_price GoogleClouddomainsRegistration#yearly_price}

---

##### `ContactNotices`<sup>Optional</sup> <a name="ContactNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.contactNotices"></a>

```csharp
public string[] ContactNotices { get; set; }
```

- *Type:* string[]

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#contact_notices GoogleClouddomainsRegistration#contact_notices}

---

##### `DnsSettings`<sup>Optional</sup> <a name="DnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.dnsSettings"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettings DnsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#dns_settings GoogleClouddomainsRegistration#dns_settings}

---

##### `DomainNotices`<sup>Optional</sup> <a name="DomainNotices" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.domainNotices"></a>

```csharp
public string[] DomainNotices { get; set; }
```

- *Type:* string[]

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#domain_notices GoogleClouddomainsRegistration#domain_notices}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#id GoogleClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#labels GoogleClouddomainsRegistration#labels}

---

##### `ManagementSettings`<sup>Optional</sup> <a name="ManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.managementSettings"></a>

```csharp
public GoogleClouddomainsRegistrationManagementSettings ManagementSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#management_settings GoogleClouddomainsRegistration#management_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#project GoogleClouddomainsRegistration#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationConfig.property.timeouts"></a>

```csharp
public GoogleClouddomainsRegistrationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts">GoogleClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#timeouts GoogleClouddomainsRegistration#timeouts}

---

### GoogleClouddomainsRegistrationContactSettings <a name="GoogleClouddomainsRegistrationContactSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettings {
    GoogleClouddomainsRegistrationContactSettingsAdminContact AdminContact,
    string Privacy,
    GoogleClouddomainsRegistrationContactSettingsRegistrantContact RegistrantContact,
    GoogleClouddomainsRegistrationContactSettingsTechnicalContact TechnicalContact
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.privacy">Privacy</a></code> | <code>string</code> | Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.technicalContact">TechnicalContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | technical_contact block. |

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.adminContact"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContact AdminContact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#admin_contact GoogleClouddomainsRegistration#admin_contact}

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.privacy"></a>

```csharp
public string Privacy { get; set; }
```

- *Type:* string

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#privacy GoogleClouddomainsRegistration#privacy}

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.registrantContact"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContact RegistrantContact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#registrant_contact GoogleClouddomainsRegistration#registrant_contact}

---

##### `TechnicalContact`<sup>Required</sup> <a name="TechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings.property.technicalContact"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContact TechnicalContact { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#technical_contact GoogleClouddomainsRegistration#technical_contact}

---

### GoogleClouddomainsRegistrationContactSettingsAdminContact <a name="GoogleClouddomainsRegistrationContactSettingsAdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsAdminContact {
    string Email,
    string PhoneNumber,
    GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress PostalAddress,
    string FaxNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.email">Email</a></code> | <code>string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber">FaxNumber</a></code> | <code>string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress PostalAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber"></a>

```csharp
public string FaxNumber { get; set; }
```

- *Type:* string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress {
    string RegionCode,
    string[] AddressLines = null,
    string AdministrativeArea = null,
    string Locality = null,
    string Organization = null,
    string PostalCode = null,
    string[] Recipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>string[]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality">Locality</a></code> | <code>string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization">Organization</a></code> | <code>string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients">Recipients</a></code> | <code>string[]</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode"></a>

```csharp
public string RegionCode { get; set; }
```

- *Type:* string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines"></a>

```csharp
public string[] AddressLines { get; set; }
```

- *Type:* string[]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea"></a>

```csharp
public string AdministrativeArea { get; set; }
```

- *Type:* string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationContactSettingsRegistrantContact <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsRegistrantContact {
    string Email,
    string PhoneNumber,
    GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress PostalAddress,
    string FaxNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.email">Email</a></code> | <code>string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber">FaxNumber</a></code> | <code>string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress PostalAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber"></a>

```csharp
public string FaxNumber { get; set; }
```

- *Type:* string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress {
    string RegionCode,
    string[] AddressLines = null,
    string AdministrativeArea = null,
    string Locality = null,
    string Organization = null,
    string PostalCode = null,
    string[] Recipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>string[]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality">Locality</a></code> | <code>string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization">Organization</a></code> | <code>string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients">Recipients</a></code> | <code>string[]</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode"></a>

```csharp
public string RegionCode { get; set; }
```

- *Type:* string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines"></a>

```csharp
public string[] AddressLines { get; set; }
```

- *Type:* string[]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea"></a>

```csharp
public string AdministrativeArea { get; set; }
```

- *Type:* string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationContactSettingsTechnicalContact <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsTechnicalContact {
    string Email,
    string PhoneNumber,
    GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress PostalAddress,
    string FaxNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.email">Email</a></code> | <code>string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber">FaxNumber</a></code> | <code>string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#email GoogleClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#phone_number GoogleClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress PostalAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#postal_address GoogleClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber"></a>

```csharp
public string FaxNumber { get; set; }
```

- *Type:* string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#fax_number GoogleClouddomainsRegistration#fax_number}

---

### GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress {
    string RegionCode,
    string[] AddressLines = null,
    string AdministrativeArea = null,
    string Locality = null,
    string Organization = null,
    string PostalCode = null,
    string[] Recipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>string[]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality">Locality</a></code> | <code>string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization">Organization</a></code> | <code>string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients">Recipients</a></code> | <code>string[]</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode"></a>

```csharp
public string RegionCode { get; set; }
```

- *Type:* string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#region_code GoogleClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines"></a>

```csharp
public string[] AddressLines { get; set; }
```

- *Type:* string[]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#address_lines GoogleClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea"></a>

```csharp
public string AdministrativeArea { get; set; }
```

- *Type:* string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#administrative_area GoogleClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality"></a>

```csharp
public string Locality { get; set; }
```

- *Type:* string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#locality GoogleClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#organization GoogleClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#postal_code GoogleClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#recipients GoogleClouddomainsRegistration#recipients}

---

### GoogleClouddomainsRegistrationDnsSettings <a name="GoogleClouddomainsRegistrationDnsSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettings {
    GoogleClouddomainsRegistrationDnsSettingsCustomDns CustomDns = null,
    object GlueRecords = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.customDns">CustomDns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | custom_dns block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.glueRecords">GlueRecords</a></code> | <code>object</code> | glue_records block. |

---

##### `CustomDns`<sup>Optional</sup> <a name="CustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.customDns"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsCustomDns CustomDns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#custom_dns GoogleClouddomainsRegistration#custom_dns}

---

##### `GlueRecords`<sup>Optional</sup> <a name="GlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings.property.glueRecords"></a>

```csharp
public object GlueRecords { get; set; }
```

- *Type:* object

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#glue_records GoogleClouddomainsRegistration#glue_records}

---

### GoogleClouddomainsRegistrationDnsSettingsCustomDns <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsCustomDns {
    string[] NameServers,
    object DsRecords = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers">NameServers</a></code> | <code>string[]</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords">DsRecords</a></code> | <code>object</code> | ds_records block. |

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers"></a>

```csharp
public string[] NameServers { get; set; }
```

- *Type:* string[]

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#name_servers GoogleClouddomainsRegistration#name_servers}

---

##### `DsRecords`<sup>Optional</sup> <a name="DsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords"></a>

```csharp
public object DsRecords { get; set; }
```

- *Type:* object

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#ds_records GoogleClouddomainsRegistration#ds_records}

---

### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords {
    string Algorithm = null,
    string Digest = null,
    string DigestType = null,
    double KeyTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm used to generate the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest">Digest</a></code> | <code>string</code> | The digest generated from the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType">DigestType</a></code> | <code>string</code> | The hash function used to generate the digest of the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag">KeyTag</a></code> | <code>double</code> | The key tag of the record. Must be set in range 0 -- 65535. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm used to generate the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#algorithm GoogleClouddomainsRegistration#algorithm}

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest"></a>

```csharp
public string Digest { get; set; }
```

- *Type:* string

The digest generated from the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#digest GoogleClouddomainsRegistration#digest}

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType"></a>

```csharp
public string DigestType { get; set; }
```

- *Type:* string

The hash function used to generate the digest of the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#digest_type GoogleClouddomainsRegistration#digest_type}

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag"></a>

```csharp
public double KeyTag { get; set; }
```

- *Type:* double

The key tag of the record. Must be set in range 0 -- 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#key_tag GoogleClouddomainsRegistration#key_tag}

---

### GoogleClouddomainsRegistrationDnsSettingsGlueRecords <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsGlueRecords {
    string HostName,
    string[] Ipv4Addresses = null,
    string[] Ipv6Addresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName">HostName</a></code> | <code>string</code> | Required. Domain name of the host in Punycode format. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Required. Domain name of the host in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#host_name GoogleClouddomainsRegistration#host_name}

---

##### `Ipv4Addresses`<sup>Optional</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; set; }
```

- *Type:* string[]

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#ipv4_addresses GoogleClouddomainsRegistration#ipv4_addresses}

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; set; }
```

- *Type:* string[]

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#ipv6_addresses GoogleClouddomainsRegistration#ipv6_addresses}

---

### GoogleClouddomainsRegistrationManagementSettings <a name="GoogleClouddomainsRegistrationManagementSettings" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationManagementSettings {
    string PreferredRenewalMethod = null,
    string TransferLockState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod">PreferredRenewalMethod</a></code> | <code>string</code> | The desired renewal method for this Registration. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.transferLockState">TransferLockState</a></code> | <code>string</code> | Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED. |

---

##### `PreferredRenewalMethod`<sup>Optional</sup> <a name="PreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod"></a>

```csharp
public string PreferredRenewalMethod { get; set; }
```

- *Type:* string

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#preferred_renewal_method GoogleClouddomainsRegistration#preferred_renewal_method}

---

##### `TransferLockState`<sup>Optional</sup> <a name="TransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings.property.transferLockState"></a>

```csharp
public string TransferLockState { get; set; }
```

- *Type:* string

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#transfer_lock_state GoogleClouddomainsRegistration#transfer_lock_state}

---

### GoogleClouddomainsRegistrationTimeouts <a name="GoogleClouddomainsRegistrationTimeouts" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#create GoogleClouddomainsRegistration#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#delete GoogleClouddomainsRegistration#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#update GoogleClouddomainsRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#create GoogleClouddomainsRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#delete GoogleClouddomainsRegistration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#update GoogleClouddomainsRegistration#update}.

---

### GoogleClouddomainsRegistrationYearlyPrice <a name="GoogleClouddomainsRegistrationYearlyPrice" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationYearlyPrice {
    string CurrencyCode = null,
    string Units = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | The three-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.units">Units</a></code> | <code>string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; set; }
```

- *Type:* string

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#currency_code GoogleClouddomainsRegistration#currency_code}

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice.property.units"></a>

```csharp
public string Units { get; set; }
```

- *Type:* string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_clouddomains_registration#units GoogleClouddomainsRegistration#units}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress"></a>

```csharp
private void PutPostalAddress(GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber"></a>

```csharp
private void ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference PostalAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput"></a>

```csharp
public string FaxNumberInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress PostalAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber"></a>

```csharp
public string FaxNumber { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines"></a>

```csharp
private void ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```csharp
private void ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients"></a>

```csharp
private void ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput"></a>

```csharp
public string[] AddressLinesInput { get; }
```

- *Type:* string[]

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```csharp
public string AdministrativeAreaInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput"></a>

```csharp
public string RegionCodeInput { get; }
```

- *Type:* string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines"></a>

```csharp
public string[] AddressLines { get; }
```

- *Type:* string[]

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea"></a>

```csharp
public string AdministrativeArea { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode"></a>

```csharp
public string RegionCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationContactSettingsOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact">PutAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact">PutRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact">PutTechnicalContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminContact` <a name="PutAdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact"></a>

```csharp
private void PutAdminContact(GoogleClouddomainsRegistrationContactSettingsAdminContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `PutRegistrantContact` <a name="PutRegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact"></a>

```csharp
private void PutRegistrantContact(GoogleClouddomainsRegistrationContactSettingsRegistrantContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `PutTechnicalContact` <a name="PutTechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact"></a>

```csharp
private void PutTechnicalContact(GoogleClouddomainsRegistrationContactSettingsTechnicalContact Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact">TechnicalContact</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput">AdminContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput">RegistrantContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput">TechnicalContactInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacy">Privacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContact"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference AdminContact { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference">GoogleClouddomainsRegistrationContactSettingsAdminContactOutputReference</a>

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference RegistrantContact { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a>

---

##### `TechnicalContact`<sup>Required</sup> <a name="TechnicalContact" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference TechnicalContact { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a>

---

##### `AdminContactInput`<sup>Optional</sup> <a name="AdminContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsAdminContact AdminContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsAdminContact">GoogleClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput"></a>

```csharp
public string PrivacyInput { get; }
```

- *Type:* string

---

##### `RegistrantContactInput`<sup>Optional</sup> <a name="RegistrantContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContact RegistrantContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `TechnicalContactInput`<sup>Optional</sup> <a name="TechnicalContactInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContact TechnicalContactInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.privacy"></a>

```csharp
public string Privacy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettings">GoogleClouddomainsRegistrationContactSettings</a>

---


### GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress"></a>

```csharp
private void PutPostalAddress(GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber"></a>

```csharp
private void ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference PostalAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput"></a>

```csharp
public string FaxNumberInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress PostalAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber"></a>

```csharp
public string FaxNumber { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContact">GoogleClouddomainsRegistrationContactSettingsRegistrantContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines"></a>

```csharp
private void ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```csharp
private void ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients"></a>

```csharp
private void ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput"></a>

```csharp
public string[] AddressLinesInput { get; }
```

- *Type:* string[]

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```csharp
public string AdministrativeAreaInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput"></a>

```csharp
public string RegionCodeInput { get; }
```

- *Type:* string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines"></a>

```csharp
public string[] AddressLines { get; }
```

- *Type:* string[]

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea"></a>

```csharp
public string AdministrativeArea { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode"></a>

```csharp
public string RegionCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress"></a>

```csharp
private void PutPostalAddress(GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber"></a>

```csharp
private void ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference PostalAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput"></a>

```csharp
public string FaxNumberInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress PostalAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber"></a>

```csharp
public string FaxNumber { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContact InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContact">GoogleClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


### GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference <a name="GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines"></a>

```csharp
private void ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```csharp
private void ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality"></a>

```csharp
private void ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients"></a>

```csharp
private void ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput"></a>

```csharp
public string[] AddressLinesInput { get; }
```

- *Type:* string[]

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```csharp
public string AdministrativeAreaInput { get; }
```

- *Type:* string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput"></a>

```csharp
public string LocalityInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput"></a>

```csharp
public string RegionCodeInput { get; }
```

- *Type:* string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines"></a>

```csharp
public string[] AddressLines { get; }
```

- *Type:* string[]

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea"></a>

```csharp
public string AdministrativeArea { get; }
```

- *Type:* string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality"></a>

```csharp
public string Locality { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode"></a>

```csharp
public string RegionCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">GoogleClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get"></a>

```csharp
private GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest"></a>

```csharp
private void ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType"></a>

```csharp
private void ResetDigestType()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag"></a>

```csharp
private void ResetKeyTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput">DigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType">DigestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag">KeyTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput"></a>

```csharp
public string DigestInput { get; }
```

- *Type:* string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput"></a>

```csharp
public string DigestTypeInput { get; }
```

- *Type:* string

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput"></a>

```csharp
public double KeyTagInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType"></a>

```csharp
public string DigestType { get; }
```

- *Type:* string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag"></a>

```csharp
public double KeyTag { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords">PutDsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords">ResetDsRecords</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDsRecords` <a name="PutDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords"></a>

```csharp
private void PutDsRecords(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords.parameter.value"></a>

- *Type:* object

---

##### `ResetDsRecords` <a name="ResetDsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords"></a>

```csharp
private void ResetDsRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords">DsRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput">DsRecordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput">NameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DsRecords`<sup>Required</sup> <a name="DsRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList DsRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">GoogleClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a>

---

##### `DsRecordsInput`<sup>Optional</sup> <a name="DsRecordsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput"></a>

```csharp
public object DsRecordsInput { get; }
```

- *Type:* object

---

##### `NameServersInput`<sup>Optional</sup> <a name="NameServersInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput"></a>

```csharp
public string[] NameServersInput { get; }
```

- *Type:* string[]

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsCustomDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---


### GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get"></a>

```csharp
private GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses">ResetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Addresses` <a name="ResetIpv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses"></a>

```csharp
private void ResetIpv4Addresses()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput">Ipv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressesInput`<sup>Optional</sup> <a name="Ipv4AddressesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput"></a>

```csharp
public string[] Ipv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput"></a>

```csharp
public string[] Ipv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddomainsRegistrationDnsSettingsOutputReference <a name="GoogleClouddomainsRegistrationDnsSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationDnsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns">PutCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords">PutGlueRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns">ResetCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords">ResetGlueRecords</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomDns` <a name="PutCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns"></a>

```csharp
private void PutCustomDns(GoogleClouddomainsRegistrationDnsSettingsCustomDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `PutGlueRecords` <a name="PutGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords"></a>

```csharp
private void PutGlueRecords(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomDns` <a name="ResetCustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns"></a>

```csharp
private void ResetCustomDns()
```

##### `ResetGlueRecords` <a name="ResetGlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords"></a>

```csharp
private void ResetGlueRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDns">CustomDns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords">GlueRecords</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList">GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput">CustomDnsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput">GlueRecordsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomDns`<sup>Required</sup> <a name="CustomDns" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDns"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference CustomDns { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">GoogleClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a>

---

##### `GlueRecords`<sup>Required</sup> <a name="GlueRecords" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList GlueRecords { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList">GoogleClouddomainsRegistrationDnsSettingsGlueRecordsList</a>

---

##### `CustomDnsInput`<sup>Optional</sup> <a name="CustomDnsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettingsCustomDns CustomDnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsCustomDns">GoogleClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `GlueRecordsInput`<sup>Optional</sup> <a name="GlueRecordsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput"></a>

```csharp
public object GlueRecordsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationDnsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationDnsSettings">GoogleClouddomainsRegistrationDnsSettings</a>

---


### GoogleClouddomainsRegistrationManagementSettingsOutputReference <a name="GoogleClouddomainsRegistrationManagementSettingsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationManagementSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod">ResetPreferredRenewalMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState">ResetTransferLockState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredRenewalMethod` <a name="ResetPreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod"></a>

```csharp
private void ResetPreferredRenewalMethod()
```

##### `ResetTransferLockState` <a name="ResetTransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState"></a>

```csharp
private void ResetTransferLockState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod">RenewalMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput">PreferredRenewalMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput">TransferLockStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod">PreferredRenewalMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState">TransferLockState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenewalMethod`<sup>Required</sup> <a name="RenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod"></a>

```csharp
public string RenewalMethod { get; }
```

- *Type:* string

---

##### `PreferredRenewalMethodInput`<sup>Optional</sup> <a name="PreferredRenewalMethodInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput"></a>

```csharp
public string PreferredRenewalMethodInput { get; }
```

- *Type:* string

---

##### `TransferLockStateInput`<sup>Optional</sup> <a name="TransferLockStateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput"></a>

```csharp
public string TransferLockStateInput { get; }
```

- *Type:* string

---

##### `PreferredRenewalMethod`<sup>Required</sup> <a name="PreferredRenewalMethod" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod"></a>

```csharp
public string PreferredRenewalMethod { get; }
```

- *Type:* string

---

##### `TransferLockState`<sup>Required</sup> <a name="TransferLockState" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState"></a>

```csharp
public string TransferLockState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationManagementSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationManagementSettings">GoogleClouddomainsRegistrationManagementSettings</a>

---


### GoogleClouddomainsRegistrationTimeoutsOutputReference <a name="GoogleClouddomainsRegistrationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddomainsRegistrationYearlyPriceOutputReference <a name="GoogleClouddomainsRegistrationYearlyPriceOutputReference" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddomainsRegistrationYearlyPriceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode"></a>

```csharp
private void ResetCurrencyCode()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.resetUnits"></a>

```csharp
private void ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput">UnitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput"></a>

```csharp
public string CurrencyCodeInput { get; }
```

- *Type:* string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput"></a>

```csharp
public string UnitsInput { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddomainsRegistrationYearlyPrice InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddomainsRegistration.GoogleClouddomainsRegistrationYearlyPrice">GoogleClouddomainsRegistrationYearlyPrice</a>

---



