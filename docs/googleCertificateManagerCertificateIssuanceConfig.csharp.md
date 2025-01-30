# `googleCertificateManagerCertificateIssuanceConfig` Submodule <a name="`googleCertificateManagerCertificateIssuanceConfig` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificateIssuanceConfig <a name="GoogleCertificateManagerCertificateIssuanceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config google_certificate_manager_certificate_issuance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfig(Construct Scope, string Id, GoogleCertificateManagerCertificateIssuanceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig">GoogleCertificateManagerCertificateIssuanceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig">GoogleCertificateManagerCertificateIssuanceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig">PutCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateAuthorityConfig` <a name="PutCertificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig"></a>

```csharp
private void PutCertificateAuthorityConfig(GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCertificateManagerCertificateIssuanceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateIssuanceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateIssuanceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateIssuanceConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateIssuanceConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCertificateManagerCertificateIssuanceConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCertificateManagerCertificateIssuanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificateIssuanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput">CertificateAuthorityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput">RotationWindowPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference CertificateAuthorityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeouts"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CertificateAuthorityConfigInput`<sup>Optional</sup> <a name="CertificateAuthorityConfigInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig CertificateAuthorityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RotationWindowPercentageInput`<sup>Optional</sup> <a name="RotationWindowPercentageInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput"></a>

```csharp
public double RotationWindowPercentageInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig {
    GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig CertificateAuthorityServiceConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig">CertificateAuthorityServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | certificate_authority_service_config block. |

---

##### `CertificateAuthorityServiceConfig`<sup>Optional</sup> <a name="CertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig CertificateAuthorityServiceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

certificate_authority_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#certificate_authority_service_config GoogleCertificateManagerCertificateIssuanceConfig#certificate_authority_service_config}

---

### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig {
    string CaPool
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool">CaPool</a></code> | <code>string</code> | A CA pool resource used to issue a certificate. |

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

A CA pool resource used to issue a certificate.

The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#ca_pool GoogleCertificateManagerCertificateIssuanceConfig#ca_pool}

---

### GoogleCertificateManagerCertificateIssuanceConfigConfig <a name="GoogleCertificateManagerCertificateIssuanceConfigConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig CertificateAuthorityConfig,
    string KeyAlgorithm,
    string Lifetime,
    string Name,
    double RotationWindowPercentage,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GoogleCertificateManagerCertificateIssuanceConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig">CertificateAuthorityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifetime">Lifetime</a></code> | <code>string</code> | Lifetime of issued certificates. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage">RotationWindowPercentage</a></code> | <code>double</code> | It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.description">Description</a></code> | <code>string</code> | One or more paragraphs of text description of a CertificateIssuanceConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#id GoogleCertificateManagerCertificateIssuanceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | 'Set of label tags associated with the CertificateIssuanceConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.location">Location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#project GoogleCertificateManagerCertificateIssuanceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateAuthorityConfig`<sup>Required</sup> <a name="CertificateAuthorityConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig CertificateAuthorityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#certificate_authority_config GoogleCertificateManagerCertificateIssuanceConfig#certificate_authority_config}

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#key_algorithm GoogleCertificateManagerCertificateIssuanceConfig#key_algorithm}

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

Lifetime of issued certificates.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#lifetime GoogleCertificateManagerCertificateIssuanceConfig#lifetime}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#name GoogleCertificateManagerCertificateIssuanceConfig#name}

---

##### `RotationWindowPercentage`<sup>Required</sup> <a name="RotationWindowPercentage" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage"></a>

```csharp
public double RotationWindowPercentage { get; set; }
```

- *Type:* double

It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.

Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#rotation_window_percentage GoogleCertificateManagerCertificateIssuanceConfig#rotation_window_percentage}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

One or more paragraphs of text description of a CertificateIssuanceConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#description GoogleCertificateManagerCertificateIssuanceConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#id GoogleCertificateManagerCertificateIssuanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

'Set of label tags associated with the CertificateIssuanceConfig resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#labels GoogleCertificateManagerCertificateIssuanceConfig#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#location GoogleCertificateManagerCertificateIssuanceConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#project GoogleCertificateManagerCertificateIssuanceConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigConfig.property.timeouts"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts">GoogleCertificateManagerCertificateIssuanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#timeouts GoogleCertificateManagerCertificateIssuanceConfig#timeouts}

---

### GoogleCertificateManagerCertificateIssuanceConfigTimeouts <a name="GoogleCertificateManagerCertificateIssuanceConfigTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#create GoogleCertificateManagerCertificateIssuanceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#delete GoogleCertificateManagerCertificateIssuanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#update GoogleCertificateManagerCertificateIssuanceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#create GoogleCertificateManagerCertificateIssuanceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#delete GoogleCertificateManagerCertificateIssuanceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_issuance_config#update GoogleCertificateManagerCertificateIssuanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---


### GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference <a name="GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig">PutCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig">ResetCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateAuthorityServiceConfig` <a name="PutCertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig"></a>

```csharp
private void PutCertificateAuthorityServiceConfig(GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `ResetCertificateAuthorityServiceConfig` <a name="ResetCertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig"></a>

```csharp
private void ResetCertificateAuthorityServiceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig">CertificateAuthorityServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput">CertificateAuthorityServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityServiceConfig`<sup>Required</sup> <a name="CertificateAuthorityServiceConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference CertificateAuthorityServiceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a>

---

##### `CertificateAuthorityServiceConfigInput`<sup>Optional</sup> <a name="CertificateAuthorityServiceConfigInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig CertificateAuthorityServiceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">GoogleCertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---


### GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateIssuanceConfig.GoogleCertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



