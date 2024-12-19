# `googleNetworkServicesEdgeCacheKeyset` Submodule <a name="`googleNetworkServicesEdgeCacheKeyset` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEdgeCacheKeyset <a name="GoogleNetworkServicesEdgeCacheKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset google_network_services_edge_cache_keyset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeyset(Construct Scope, string Id, GoogleNetworkServicesEdgeCacheKeysetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig">GoogleNetworkServicesEdgeCacheKeysetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig">GoogleNetworkServicesEdgeCacheKeysetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey">PutPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys">PutValidationSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetValidationSharedKeys">ResetValidationSharedKeys</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicKey` <a name="PutPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey"></a>

```csharp
private void PutPublicKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesEdgeCacheKeysetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

---

##### `PutValidationSharedKeys` <a name="PutValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys"></a>

```csharp
private void PutValidationSharedKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidationSharedKeys` <a name="ResetValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetValidationSharedKeys"></a>

```csharp
private void ResetValidationSharedKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheKeyset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheKeyset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheKeyset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesEdgeCacheKeyset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheKeyset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesEdgeCacheKeyset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheKeyset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList">GoogleNetworkServicesEdgeCacheKeysetPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeys">ValidationSharedKeys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKeyInput">PublicKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput">ValidationSharedKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKey"></a>

```csharp
public GoogleNetworkServicesEdgeCacheKeysetPublicKeyList PublicKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList">GoogleNetworkServicesEdgeCacheKeysetPublicKeyList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeouts"></a>

```csharp
public GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a>

---

##### `ValidationSharedKeys`<sup>Required</sup> <a name="ValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeys"></a>

```csharp
public GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList ValidationSharedKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKeyInput"></a>

```csharp
public object PublicKeyInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidationSharedKeysInput`<sup>Optional</sup> <a name="ValidationSharedKeysInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput"></a>

```csharp
public object ValidationSharedKeysInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEdgeCacheKeysetConfig <a name="GoogleNetworkServicesEdgeCacheKeysetConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    object PublicKey = null,
    GoogleNetworkServicesEdgeCacheKeysetTimeouts Timeouts = null,
    object ValidationSharedKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.publicKey">PublicKey</a></code> | <code>object</code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys">ValidationSharedKeys</a></code> | <code>object</code> | validation_shared_keys block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#name GoogleNetworkServicesEdgeCacheKeyset#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#description GoogleNetworkServicesEdgeCacheKeyset#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#labels GoogleNetworkServicesEdgeCacheKeyset#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.publicKey"></a>

```csharp
public object PublicKey { get; set; }
```

- *Type:* object

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#public_key GoogleNetworkServicesEdgeCacheKeyset#public_key}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesEdgeCacheKeysetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#timeouts GoogleNetworkServicesEdgeCacheKeyset#timeouts}

---

##### `ValidationSharedKeys`<sup>Optional</sup> <a name="ValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys"></a>

```csharp
public object ValidationSharedKeys { get; set; }
```

- *Type:* object

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#validation_shared_keys GoogleNetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

### GoogleNetworkServicesEdgeCacheKeysetPublicKey <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetPublicKey {
    string Id,
    object Managed = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.id">Id</a></code> | <code>string</code> | The ID of the public key. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.managed">Managed</a></code> | <code>object</code> | Set to true to have the CDN automatically manage this public key value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.value">Value</a></code> | <code>string</code> | The base64-encoded value of the Ed25519 public key. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the public key.

The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.managed"></a>

```csharp
public object Managed { get; set; }
```

- *Type:* object

Set to true to have the CDN automatically manage this public key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#managed GoogleNetworkServicesEdgeCacheKeyset#managed}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The base64-encoded value of the Ed25519 public key.

The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#value GoogleNetworkServicesEdgeCacheKeyset#value}

---

### GoogleNetworkServicesEdgeCacheKeysetTimeouts <a name="GoogleNetworkServicesEdgeCacheKeysetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}.

---

### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The name of the secret version in Secret Manager. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The name of the secret version in Secret Manager.

The resource name of the secret version must be in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.

* If you are using HMAC-SHA1, we suggest 20-byte secrets.
* If you are using HMAC-SHA256, we suggest 32-byte secrets.
  See RFC 2104, Section 3 for more details on these recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_edge_cache_keyset#secret_version GoogleNetworkServicesEdgeCacheKeyset#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEdgeCacheKeysetPublicKeyList <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKeyList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetPublicKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get"></a>

```csharp
private GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged"></a>

```csharp
private void ResetManaged()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput">ManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed">Managed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput"></a>

```csharp
public object ManagedInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed"></a>

```csharp
public object Managed { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get"></a>

```csharp
private GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



