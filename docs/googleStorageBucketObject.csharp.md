# `googleStorageBucketObject` Submodule <a name="`googleStorageBucketObject` Submodule" id="@cdktf/provider-google-beta.googleStorageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBucketObject <a name="GoogleStorageBucketObject" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObject(Construct Scope, string Id, GoogleStorageBucketObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig">GoogleStorageBucketObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig">GoogleStorageBucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption">PutCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention">PutRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCustomerEncryption">ResetCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetDetectMd5Hash">ResetDetectMd5Hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetEventBasedHold">ResetEventBasedHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetRetention">ResetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTemporaryHold">ResetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerEncryption` <a name="PutCustomerEncryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption"></a>

```csharp
private void PutCustomerEncryption(GoogleStorageBucketObjectCustomerEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

---

##### `PutRetention` <a name="PutRetention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention"></a>

```csharp
private void PutRetention(GoogleStorageBucketObjectRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageBucketObjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCustomerEncryption` <a name="ResetCustomerEncryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCustomerEncryption"></a>

```csharp
private void ResetCustomerEncryption()
```

##### `ResetDetectMd5Hash` <a name="ResetDetectMd5Hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetDetectMd5Hash"></a>

```csharp
private void ResetDetectMd5Hash()
```

##### `ResetEventBasedHold` <a name="ResetEventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetEventBasedHold"></a>

```csharp
private void ResetEventBasedHold()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetRetention` <a name="ResetRetention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetRetention"></a>

```csharp
private void ResetRetention()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTemporaryHold` <a name="ResetTemporaryHold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTemporaryHold"></a>

```csharp
private void ResetTemporaryHold()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucketObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucketObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucketObject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageBucketObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleStorageBucketObject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageBucketObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.crc32C">Crc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference">GoogleStorageBucketObjectCustomerEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.md5Hash">Md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.mediaLink">MediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.outputName">OutputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retention">Retention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference">GoogleStorageBucketObjectRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference">GoogleStorageBucketObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryptionInput">CustomerEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5HashInput">DetectMd5HashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHoldInput">EventBasedHoldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retentionInput">RetentionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHoldInput">TemporaryHoldInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHold">EventBasedHold</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHold">TemporaryHold</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Crc32C`<sup>Required</sup> <a name="Crc32C" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.crc32C"></a>

```csharp
public string Crc32C { get; }
```

- *Type:* string

---

##### `CustomerEncryption`<sup>Required</sup> <a name="CustomerEncryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryption"></a>

```csharp
public GoogleStorageBucketObjectCustomerEncryptionOutputReference CustomerEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference">GoogleStorageBucketObjectCustomerEncryptionOutputReference</a>

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `Md5Hash`<sup>Required</sup> <a name="Md5Hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.md5Hash"></a>

```csharp
public string Md5Hash { get; }
```

- *Type:* string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.mediaLink"></a>

```csharp
public string MediaLink { get; }
```

- *Type:* string

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.outputName"></a>

```csharp
public string OutputName { get; }
```

- *Type:* string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retention"></a>

```csharp
public GoogleStorageBucketObjectRetentionOutputReference Retention { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference">GoogleStorageBucketObjectRetentionOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeouts"></a>

```csharp
public GoogleStorageBucketObjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference">GoogleStorageBucketObjectTimeoutsOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CustomerEncryptionInput`<sup>Optional</sup> <a name="CustomerEncryptionInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryptionInput"></a>

```csharp
public GoogleStorageBucketObjectCustomerEncryption CustomerEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

---

##### `DetectMd5HashInput`<sup>Optional</sup> <a name="DetectMd5HashInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5HashInput"></a>

```csharp
public string DetectMd5HashInput { get; }
```

- *Type:* string

---

##### `EventBasedHoldInput`<sup>Optional</sup> <a name="EventBasedHoldInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHoldInput"></a>

```csharp
public object EventBasedHoldInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retentionInput"></a>

```csharp
public GoogleStorageBucketObjectRetention RetentionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TemporaryHoldInput`<sup>Optional</sup> <a name="TemporaryHoldInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHoldInput"></a>

```csharp
public object TemporaryHoldInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `DetectMd5Hash`<sup>Required</sup> <a name="DetectMd5Hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5Hash"></a>

```csharp
public string DetectMd5Hash { get; }
```

- *Type:* string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHold"></a>

```csharp
public object EventBasedHold { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHold"></a>

```csharp
public object TemporaryHold { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBucketObjectConfig <a name="GoogleStorageBucketObjectConfig" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Name,
    string CacheControl = null,
    string Content = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    GoogleStorageBucketObjectCustomerEncryption CustomerEncryption = null,
    string DetectMd5Hash = null,
    object EventBasedHold = null,
    string Id = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    GoogleStorageBucketObjectRetention Retention = null,
    string Source = null,
    string StorageClass = null,
    object TemporaryHold = null,
    GoogleStorageBucketObjectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.name">Name</a></code> | <code>string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.content">Content</a></code> | <code>string</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentType">ContentType</a></code> | <code>string</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.eventBasedHold">EventBasedHold</a></code> | <code>object</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#id GoogleStorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.retention">Retention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.source">Source</a></code> | <code>string</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.temporaryHold">TemporaryHold</a></code> | <code>object</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#bucket GoogleStorageBucketObject#bucket}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#name GoogleStorageBucketObject#name}

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#cache_control GoogleStorageBucketObject#cache_control}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#content GoogleStorageBucketObject#content}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#content_disposition GoogleStorageBucketObject#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#content_encoding GoogleStorageBucketObject#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#content_language GoogleStorageBucketObject#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#content_type GoogleStorageBucketObject#content_type}

---

##### `CustomerEncryption`<sup>Optional</sup> <a name="CustomerEncryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.customerEncryption"></a>

```csharp
public GoogleStorageBucketObjectCustomerEncryption CustomerEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#customer_encryption GoogleStorageBucketObject#customer_encryption}

---

##### `DetectMd5Hash`<sup>Optional</sup> <a name="DetectMd5Hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.detectMd5Hash"></a>

```csharp
public string DetectMd5Hash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}.

---

##### `EventBasedHold`<sup>Optional</sup> <a name="EventBasedHold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.eventBasedHold"></a>

```csharp
public object EventBasedHold { get; set; }
```

- *Type:* object

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#event_based_hold GoogleStorageBucketObject#event_based_hold}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#id GoogleStorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#kms_key_name GoogleStorageBucketObject#kms_key_name}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#metadata GoogleStorageBucketObject#metadata}

---

##### `Retention`<sup>Optional</sup> <a name="Retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.retention"></a>

```csharp
public GoogleStorageBucketObjectRetention Retention { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#retention GoogleStorageBucketObject#retention}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#source GoogleStorageBucketObject#source}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#storage_class GoogleStorageBucketObject#storage_class}

---

##### `TemporaryHold`<sup>Optional</sup> <a name="TemporaryHold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.temporaryHold"></a>

```csharp
public object TemporaryHold { get; set; }
```

- *Type:* object

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#temporary_hold GoogleStorageBucketObject#temporary_hold}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.timeouts"></a>

```csharp
public GoogleStorageBucketObjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#timeouts GoogleStorageBucketObject#timeouts}

---

### GoogleStorageBucketObjectCustomerEncryption <a name="GoogleStorageBucketObjectCustomerEncryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectCustomerEncryption {
    string EncryptionKey,
    string EncryptionAlgorithm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | Base64 encoded customer supplied encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | The encryption algorithm. Default: AES256. |

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; set; }
```

- *Type:* string

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#encryption_key GoogleStorageBucketObject#encryption_key}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#encryption_algorithm GoogleStorageBucketObject#encryption_algorithm}

---

### GoogleStorageBucketObjectRetention <a name="GoogleStorageBucketObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectRetention {
    string Mode,
    string RetainUntilTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.mode">Mode</a></code> | <code>string</code> | The object retention mode. Supported values include: "Unlocked", "Locked". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.retainUntilTime">RetainUntilTime</a></code> | <code>string</code> | Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The object retention mode. Supported values include: "Unlocked", "Locked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#mode GoogleStorageBucketObject#mode}

---

##### `RetainUntilTime`<sup>Required</sup> <a name="RetainUntilTime" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.retainUntilTime"></a>

```csharp
public string RetainUntilTime { get; set; }
```

- *Type:* string

Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#retain_until_time GoogleStorageBucketObject#retain_until_time}

---

### GoogleStorageBucketObjectTimeouts <a name="GoogleStorageBucketObjectTimeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#create GoogleStorageBucketObject#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#delete GoogleStorageBucketObject#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#update GoogleStorageBucketObject#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#create GoogleStorageBucketObject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#delete GoogleStorageBucketObject#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_storage_bucket_object#update GoogleStorageBucketObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBucketObjectCustomerEncryptionOutputReference <a name="GoogleStorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectCustomerEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput"></a>

```csharp
public string EncryptionKeyInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketObjectCustomerEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

---


### GoogleStorageBucketObjectRetentionOutputReference <a name="GoogleStorageBucketObjectRetentionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTimeInput">RetainUntilTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTime">RetainUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `RetainUntilTimeInput`<sup>Optional</sup> <a name="RetainUntilTimeInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTimeInput"></a>

```csharp
public string RetainUntilTimeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RetainUntilTime`<sup>Required</sup> <a name="RetainUntilTime" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTime"></a>

```csharp
public string RetainUntilTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageBucketObjectRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

---


### GoogleStorageBucketObjectTimeoutsOutputReference <a name="GoogleStorageBucketObjectTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageBucketObjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



