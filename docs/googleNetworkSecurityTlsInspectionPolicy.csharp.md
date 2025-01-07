# `googleNetworkSecurityTlsInspectionPolicy` Submodule <a name="`googleNetworkSecurityTlsInspectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityTlsInspectionPolicy <a name="GoogleNetworkSecurityTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy google_network_security_tls_inspection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityTlsInspectionPolicy(Construct Scope, string Id, GoogleNetworkSecurityTlsInspectionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig">GoogleNetworkSecurityTlsInspectionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig">GoogleNetworkSecurityTlsInspectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures">ResetCustomTlsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet">ResetExcludePublicCaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile">ResetTlsFeatureProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTrustConfig">ResetTrustConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityTlsInspectionPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `ResetCustomTlsFeatures` <a name="ResetCustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures"></a>

```csharp
private void ResetCustomTlsFeatures()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludePublicCaSet` <a name="ResetExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet"></a>

```csharp
private void ResetExcludePublicCaSet()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsFeatureProfile` <a name="ResetTlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile"></a>

```csharp
private void ResetTlsFeatureProfile()
```

##### `ResetTrustConfig` <a name="ResetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTrustConfig"></a>

```csharp
private void ResetTrustConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityTlsInspectionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityTlsInspectionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityTlsInspectionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityTlsInspectionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityTlsInspectionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityTlsInspectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityTlsInspectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput">CustomTlsFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput">ExcludePublicCaSetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput">TlsFeatureProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfigInput">TrustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeatures">CustomTlsFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet">ExcludePublicCaSet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile">TlsFeatureProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfig">TrustConfig</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `CustomTlsFeaturesInput`<sup>Optional</sup> <a name="CustomTlsFeaturesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput"></a>

```csharp
public string[] CustomTlsFeaturesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludePublicCaSetInput`<sup>Optional</sup> <a name="ExcludePublicCaSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput"></a>

```csharp
public object ExcludePublicCaSetInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsFeatureProfileInput`<sup>Optional</sup> <a name="TlsFeatureProfileInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput"></a>

```csharp
public string TlsFeatureProfileInput { get; }
```

- *Type:* string

---

##### `TrustConfigInput`<sup>Optional</sup> <a name="TrustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfigInput"></a>

```csharp
public string TrustConfigInput { get; }
```

- *Type:* string

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `CustomTlsFeatures`<sup>Required</sup> <a name="CustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeatures"></a>

```csharp
public string[] CustomTlsFeatures { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludePublicCaSet`<sup>Required</sup> <a name="ExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet"></a>

```csharp
public object ExcludePublicCaSet { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TlsFeatureProfile`<sup>Required</sup> <a name="TlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile"></a>

```csharp
public string TlsFeatureProfile { get; }
```

- *Type:* string

---

##### `TrustConfig`<sup>Required</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfig"></a>

```csharp
public string TrustConfig { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityTlsInspectionPolicyConfig <a name="GoogleNetworkSecurityTlsInspectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityTlsInspectionPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CaPool,
    string Name,
    string[] CustomTlsFeatures = null,
    string Description = null,
    object ExcludePublicCaSet = null,
    string Id = null,
    string Location = null,
    string MinTlsVersion = null,
    string Project = null,
    GoogleNetworkSecurityTlsInspectionPolicyTimeouts Timeouts = null,
    string TlsFeatureProfile = null,
    string TrustConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.caPool">CaPool</a></code> | <code>string</code> | A CA pool resource used to issue interception certificates. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.name">Name</a></code> | <code>string</code> | Short name of the TlsInspectionPolicy resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures">CustomTlsFeatures</a></code> | <code>string[]</code> | List of custom TLS cipher suites selected. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.description">Description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet">ExcludePublicCaSet</a></code> | <code>object</code> | If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#id GoogleNetworkSecurityTlsInspectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location of the tls inspection policy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#project GoogleNetworkSecurityTlsInspectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile">TlsFeatureProfile</a></code> | <code>string</code> | The selected Profile. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.trustConfig">TrustConfig</a></code> | <code>string</code> | A TrustConfig resource used when making a connection to the TLS server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

A CA pool resource used to issue interception certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#ca_pool GoogleNetworkSecurityTlsInspectionPolicy#ca_pool}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Short name of the TlsInspectionPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#name GoogleNetworkSecurityTlsInspectionPolicy#name}

---

##### `CustomTlsFeatures`<sup>Optional</sup> <a name="CustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures"></a>

```csharp
public string[] CustomTlsFeatures { get; set; }
```

- *Type:* string[]

List of custom TLS cipher suites selected.

This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#custom_tls_features GoogleNetworkSecurityTlsInspectionPolicy#custom_tls_features}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#description GoogleNetworkSecurityTlsInspectionPolicy#description}

---

##### `ExcludePublicCaSet`<sup>Optional</sup> <a name="ExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet"></a>

```csharp
public object ExcludePublicCaSet { get; set; }
```

- *Type:* object

If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig.

These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#exclude_public_ca_set GoogleNetworkSecurityTlsInspectionPolicy#exclude_public_ca_set}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#id GoogleNetworkSecurityTlsInspectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the tls inspection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#location GoogleNetworkSecurityTlsInspectionPolicy#location}

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Minimum TLS version that the firewall should use when negotiating connections with both clients and servers.

If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["TLS_VERSION_UNSPECIFIED", "TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#min_tls_version GoogleNetworkSecurityTlsInspectionPolicy#min_tls_version}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#project GoogleNetworkSecurityTlsInspectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityTlsInspectionPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#timeouts GoogleNetworkSecurityTlsInspectionPolicy#timeouts}

---

##### `TlsFeatureProfile`<sup>Optional</sup> <a name="TlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile"></a>

```csharp
public string TlsFeatureProfile { get; set; }
```

- *Type:* string

The selected Profile.

If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["PROFILE_UNSPECIFIED", "PROFILE_COMPATIBLE", "PROFILE_MODERN", "PROFILE_RESTRICTED", "PROFILE_CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#tls_feature_profile GoogleNetworkSecurityTlsInspectionPolicy#tls_feature_profile}

---

##### `TrustConfig`<sup>Optional</sup> <a name="TrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.trustConfig"></a>

```csharp
public string TrustConfig { get; set; }
```

- *Type:* string

A TrustConfig resource used when making a connection to the TLS server.

This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Trust config and the TLS inspection policy must be in the same region. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#trust_config GoogleNetworkSecurityTlsInspectionPolicy#trust_config}

---

### GoogleNetworkSecurityTlsInspectionPolicyTimeouts <a name="GoogleNetworkSecurityTlsInspectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityTlsInspectionPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#create GoogleNetworkSecurityTlsInspectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#delete GoogleNetworkSecurityTlsInspectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#update GoogleNetworkSecurityTlsInspectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#create GoogleNetworkSecurityTlsInspectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#delete GoogleNetworkSecurityTlsInspectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_security_tls_inspection_policy#update GoogleNetworkSecurityTlsInspectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



