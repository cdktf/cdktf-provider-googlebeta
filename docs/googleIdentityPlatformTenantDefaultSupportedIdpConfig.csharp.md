# `googleIdentityPlatformTenantDefaultSupportedIdpConfig` Submodule <a name="`googleIdentityPlatformTenantDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfig <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantDefaultSupportedIdpConfig(Construct Scope, string Id, GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIdentityPlatformTenantDefaultSupportedIdpConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIdentityPlatformTenantDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenantDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput">IdpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId">IdpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts"></a>

```csharp
public GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput"></a>

```csharp
public string IdpIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId"></a>

```csharp
public string IdpId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId,
    string ClientSecret,
    string IdpId,
    string Tenant,
    object Enabled = null,
    string Id = null,
    string Project = null,
    GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId">ClientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId">IdpId</a></code> | <code>string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant">Tenant</a></code> | <code>string</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled">Enabled</a></code> | <code>object</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#client_secret GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId"></a>

```csharp
public string IdpId { get; set; }
```

- *Type:* string

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#idp_id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#tenant GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#enabled GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#id GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#project GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```csharp
public GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#timeouts GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#create GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#delete GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_identity_platform_tenant_default_supported_idp_config#update GoogleIdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantDefaultSupportedIdpConfig.GoogleIdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



