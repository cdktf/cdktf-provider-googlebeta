# `googleSecretManagerRegionalSecret` Submodule <a name="`googleSecretManagerRegionalSecret` Submodule" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecret <a name="GoogleSecretManagerRegionalSecret" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecret(Construct Scope, string Id, GoogleSecretManagerRegionalSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig">GoogleSecretManagerRegionalSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig">GoogleSecretManagerRegionalSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption">PutCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation">PutRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics">PutTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetCustomerManagedEncryption">ResetCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetRotation">ResetRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionDestroyTtl">ResetVersionDestroyTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedEncryption` <a name="PutCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption"></a>

```csharp
private void PutCustomerManagedEncryption(GoogleSecretManagerRegionalSecretCustomerManagedEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putCustomerManagedEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `PutRotation` <a name="PutRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation"></a>

```csharp
private void PutRotation(GoogleSecretManagerRegionalSecretRotation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putRotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSecretManagerRegionalSecretTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>

---

##### `PutTopics` <a name="PutTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics"></a>

```csharp
private void PutTopics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.putTopics.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCustomerManagedEncryption` <a name="ResetCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetCustomerManagedEncryption"></a>

```csharp
private void ResetCustomerManagedEncryption()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRotation` <a name="ResetRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetRotation"></a>

```csharp
private void ResetRotation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTopics"></a>

```csharp
private void ResetTopics()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionAliases"></a>

```csharp
private void ResetVersionAliases()
```

##### `ResetVersionDestroyTtl` <a name="ResetVersionDestroyTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.resetVersionDestroyTtl"></a>

```csharp
private void ResetVersionDestroyTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecretManagerRegionalSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecretManagerRegionalSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference">GoogleSecretManagerRegionalSecretRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference">GoogleSecretManagerRegionalSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList">GoogleSecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryptionInput">CustomerManagedEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotationInput">RotationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topicsInput">TopicsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtlInput">VersionDestroyTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliases">VersionAliases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```csharp
public GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference">GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotation"></a>

```csharp
public GoogleSecretManagerRegionalSecretRotationOutputReference Rotation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference">GoogleSecretManagerRegionalSecretRotationOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeouts"></a>

```csharp
public GoogleSecretManagerRegionalSecretTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference">GoogleSecretManagerRegionalSecretTimeoutsOutputReference</a>

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topics"></a>

```csharp
public GoogleSecretManagerRegionalSecretTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList">GoogleSecretManagerRegionalSecretTopicsList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomerManagedEncryptionInput`<sup>Optional</sup> <a name="CustomerManagedEncryptionInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.customerManagedEncryptionInput"></a>

```csharp
public GoogleSecretManagerRegionalSecretCustomerManagedEncryption CustomerManagedEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RotationInput`<sup>Optional</sup> <a name="RotationInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.rotationInput"></a>

```csharp
public GoogleSecretManagerRegionalSecretRotation RotationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.topicsInput"></a>

```csharp
public object TopicsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliasesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VersionAliasesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionDestroyTtlInput`<sup>Optional</sup> <a name="VersionDestroyTtlInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtlInput"></a>

```csharp
public string VersionDestroyTtlInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionAliases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VersionAliases { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```csharp
public string VersionDestroyTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretConfig <a name="GoogleSecretManagerRegionalSecretConfig" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string SecretId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleSecretManagerRegionalSecretCustomerManagedEncryption CustomerManagedEncryption = null,
    string ExpireTime = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleSecretManagerRegionalSecretRotation Rotation = null,
    GoogleSecretManagerRegionalSecretTimeouts Timeouts = null,
    object Topics = null,
    string Ttl = null,
    System.Collections.Generic.IDictionary<string, string> VersionAliases = null,
    string VersionDestroyTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.location">Location</a></code> | <code>string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom metadata about the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | customer_managed_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.expireTime">ExpireTime</a></code> | <code>string</code> | Timestamp in UTC when the regional secret is scheduled to expire. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels assigned to this regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | rotation block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.topics">Topics</a></code> | <code>object</code> | topics block. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL for the regional secret. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionAliases">VersionAliases</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping from version alias to version name. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>string</code> | Secret Version TTL after destruction request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#location GoogleSecretManagerRegionalSecret#location}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#secret_id GoogleSecretManagerRegionalSecret#secret_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom metadata about the regional secret.

Annotations are distinct from various forms of labels. Annotations exist to allow
client tools to store their own state information without requiring a database.

Annotation keys must be between 1 and 63 characters long, have a UTF-8 encoding of
maximum 128 bytes, begin and end with an alphanumeric character ([a-z0-9A-Z]), and
may have dashes (-), underscores (_), dots (.), and alphanumerics in between these
symbols.

The total size of annotation keys and values must be less than 16KiB.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#annotations GoogleSecretManagerRegionalSecret#annotations}

---

##### `CustomerManagedEncryption`<sup>Optional</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.customerManagedEncryption"></a>

```csharp
public GoogleSecretManagerRegionalSecretCustomerManagedEncryption CustomerManagedEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

customer_managed_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#customer_managed_encryption GoogleSecretManagerRegionalSecret#customer_managed_encryption}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

Timestamp in UTC when the regional secret is scheduled to expire.

This is always provided on
output, regardless of what was sent on input. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z". Only one of 'expire_time' or 'ttl' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#expire_time GoogleSecretManagerRegionalSecret#expire_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#id GoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels assigned to this regional secret.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#labels GoogleSecretManagerRegionalSecret#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#project GoogleSecretManagerRegionalSecret#project}.

---

##### `Rotation`<sup>Optional</sup> <a name="Rotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.rotation"></a>

```csharp
public GoogleSecretManagerRegionalSecretRotation Rotation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

rotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#rotation GoogleSecretManagerRegionalSecret#rotation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.timeouts"></a>

```csharp
public GoogleSecretManagerRegionalSecretTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts">GoogleSecretManagerRegionalSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#timeouts GoogleSecretManagerRegionalSecret#timeouts}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.topics"></a>

```csharp
public object Topics { get; set; }
```

- *Type:* object

topics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#topics GoogleSecretManagerRegionalSecret#topics}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL for the regional secret.

A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s". Only one of 'ttl' or 'expire_time' can be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#ttl GoogleSecretManagerRegionalSecret#ttl}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionAliases"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VersionAliases { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping from version alias to version name.

A version alias is a string with a maximum length of 63 characters and can contain
uppercase and lowercase letters, numerals, and the hyphen (-) and underscore ('_')
characters. An alias string must start with a letter and cannot be the string
'latest' or 'NEW'. No more than 50 aliases can be assigned to a given secret.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#version_aliases GoogleSecretManagerRegionalSecret#version_aliases}

---

##### `VersionDestroyTtl`<sup>Optional</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretConfig.property.versionDestroyTtl"></a>

```csharp
public string VersionDestroyTtl { get; set; }
```

- *Type:* string

Secret Version TTL after destruction request.

This is a part of the delayed delete feature on Secret Version.
For secret with versionDestroyTtl>0, version destruction doesn't happen immediately
on calling destroy instead the version goes to a disabled state and
the actual destruction happens after this TTL expires. It must be atleast 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#version_destroy_ttl GoogleSecretManagerRegionalSecret#version_destroy_ttl}

---

### GoogleSecretManagerRegionalSecretCustomerManagedEncryption <a name="GoogleSecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretCustomerManagedEncryption {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#kms_key_name GoogleSecretManagerRegionalSecret#kms_key_name}

---

### GoogleSecretManagerRegionalSecretRotation <a name="GoogleSecretManagerRegionalSecretRotation" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretRotation {
    string NextRotationTime = null,
    string RotationPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | Timestamp in UTC at which the Secret is scheduled to rotate. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | The Duration between rotation notifications. |

---

##### `NextRotationTime`<sup>Optional</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; set; }
```

- *Type:* string

Timestamp in UTC at which the Secret is scheduled to rotate.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#next_rotation_time GoogleSecretManagerRegionalSecret#next_rotation_time}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

The Duration between rotation notifications.

Must be in seconds and at least 3600s (1h)
and at most 3153600000s (100 years). If rotationPeriod is set, 'next_rotation_time' must
be set. 'next_rotation_time' will be advanced by this period when the service
automatically sends rotation notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#rotation_period GoogleSecretManagerRegionalSecret#rotation_period}

---

### GoogleSecretManagerRegionalSecretTimeouts <a name="GoogleSecretManagerRegionalSecretTimeouts" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#create GoogleSecretManagerRegionalSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#delete GoogleSecretManagerRegionalSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#update GoogleSecretManagerRegionalSecret#update}.

---

### GoogleSecretManagerRegionalSecretTopics <a name="GoogleSecretManagerRegionalSecretTopics" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretTopics {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.property.name">Name</a></code> | <code>string</code> | The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Pub/Sub topic that will be published to, in the following format: projects/* /topics/*.

For publication to succeed, the Secret Manager Service
Agent service account must have pubsub.publisher permissions on the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_secret_manager_regional_secret#name GoogleSecretManagerRegionalSecret#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public GoogleSecretManagerRegionalSecretCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretCustomerManagedEncryption">GoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### GoogleSecretManagerRegionalSecretRotationOutputReference <a name="GoogleSecretManagerRegionalSecretRotationOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime">ResetNextRotationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNextRotationTime` <a name="ResetNextRotationTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetNextRotationTime"></a>

```csharp
private void ResetNextRotationTime()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput">NextRotationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTimeInput`<sup>Optional</sup> <a name="NextRotationTimeInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTimeInput"></a>

```csharp
public string NextRotationTimeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```csharp
public GoogleSecretManagerRegionalSecretRotation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretRotation">GoogleSecretManagerRegionalSecretRotation</a>

---


### GoogleSecretManagerRegionalSecretTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleSecretManagerRegionalSecretTopicsList <a name="GoogleSecretManagerRegionalSecretTopicsList" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get"></a>

```csharp
private GoogleSecretManagerRegionalSecretTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleSecretManagerRegionalSecretTopicsOutputReference <a name="GoogleSecretManagerRegionalSecretTopicsOutputReference" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecretManagerRegionalSecretTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecretManagerRegionalSecret.GoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



